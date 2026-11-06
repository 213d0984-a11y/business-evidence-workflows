// One complete result bundle per input item. No API requests or automatic business actions.
const out=[];
for (const input of $input.all()) {
  const b=input.json;
  const rows=Array.isArray(b.rows)?b.rows:[];
  const kind=b.sourceKind;
  const healthType=kind==='catalog'?'catalog_health':kind==='ats'?'board_health':null;
  const health=rows.filter(r=>r.recordType===healthType);
  const hold=(reason,source='unknown')=>out.push({json:{queueStatus:'held',sourceKind:kind??'unknown',sourceKey:source,reason,demoOnly:b.demoOnly===true,reviewDecision:''}});
  if (!healthType || !rows.length || !health.length) { hold('Missing or unsupported result health; do not interpret as no changes.'); continue; }
  // Catalog change rows carry no feedId, so require exactly one catalog per bundle.
  if(kind==='catalog' && health.length!==1) {hold('Ambiguous catalog bundle: supply one feed result per item.');continue;}
  const knownKeys=new Set(health.map(h=>kind==='catalog'?h.feedId:h.boardKey));
  if(kind==='ats' && (knownKeys.size!==health.length || rows.some(r=>r.recordType==='job_delta'&&!knownKeys.has(r.boardKey)))) {hold('Missing or duplicate board health; check the complete result.');continue;}
  for(const h of health) {
    const key=kind==='catalog'?h.feedId:h.boardKey;
    const safe=kind==='catalog'?h.status==='completed'&&h.issues===0:h.sourceHealthy===true&&h.complete===true;
    if(!key || !h.observedAt || !safe) {hold('Source incomplete, unhealthy or missing evidence metadata.',key);continue;}
    const relevant=rows.filter(r=>kind==='catalog'?r.recordType==='catalog_change':r.recordType==='job_delta'&&r.boardKey===key);
    const allowed=kind==='catalog'?['updated','added','removed_candidate']:['added','updated','closure_pending','closed_candidate'];
    if(relevant.some(r=>r.changeType!=='baseline'&&(!allowed.includes(r.changeType)||typeof (kind==='catalog'?r.itemId:r.id)!=='string'))) {hold('Unexpected event or non-string identifier; review the source result.',key);continue;}
    const declaredCount=kind==='catalog'?h.changes:h.deltaRecords;
    if(h.baseline!==true && (!Number.isInteger(declaredCount)||declaredCount!==relevant.length)) {hold('Result row count does not match health; check for a partial export.',key);continue;}
    const changes=relevant.filter(r=>r.changeType!=='baseline');
    if(h.baseline===true || !changes.length) {out.push({json:{queueStatus:h.baseline===true?'baseline':'no_change',sourceKind:kind,sourceKey:key,observedAt:h.observedAt,demoOnly:b.demoOnly===true,reason:'Observation recorded; no review change queued.',reviewDecision:''}});continue;}
    for(const r of changes) {
      const id=kind==='catalog'?r.itemId:r.id;
      out.push({json:{queueStatus:'needs_review',sourceKind:kind,sourceKey:key,itemId:id,changeType:r.changeType,changedFields:r.changedFields??[],before:r.before??null,after:r.after??null,title:r.title??null,sourceUrl:r.sourceUrl??h.sourceUrl??null,observedAt:r.observedAt??h.observedAt,missingCompleteObservations:r.missingCompleteObservations??null,evidence:r.evidence??r.closureEvidence??'Compare with the authorized source before acting.',demoOnly:b.demoOnly===true,reviewDecision:''}});
    }
  }
}
return out;
