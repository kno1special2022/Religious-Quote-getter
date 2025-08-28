export function getEntitlements(){
  if (typeof window === 'undefined') return {premium:false,packs:{},templates:{}};
  const raw = localStorage.getItem('entitlements');
  return raw ? JSON.parse(raw) : {premium:false,packs:{},templates:{}};
}
export function setEntitlements(next){
  localStorage.setItem('entitlements', JSON.stringify(next));
}
export function hasAccess(tradition, ent) {
  if (ent.premium) return true;
  if (tradition === 'Bible') return true;
  if (tradition === 'Quran') return !!ent.packs?.pack_quran;
  if (tradition === 'Tanakh') return !!ent.packs?.pack_tanakh;
  if (tradition === 'LDS') return !!ent.packs?.pack_lds;
  return false;
}
