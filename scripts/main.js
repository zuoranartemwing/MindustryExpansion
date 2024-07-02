let modMindExp = Vars.mods.locateMod("mindustry-expansion").meta;

modMindExp.displayName = Core.bundle.get("mod.name");
modMindExp.author = Core.bundle.get("mod.author");
modMindExp.description = Core.bundle.get("mod.description");

/* --- This code will be updated later by Jab when new Deltais has been finished! ---

modMindExp.softDependencies = ["rotatemindera"];
let extraDependencies = Vars.mods.locateMod("rotatemindera");

if(extraDependencies != null){
  modMindExp.description = Core.bundle.get("mod.description");
  modMindExp.author = Core.bundle.get("mod.author-legacy"); -> Unavailable for now, don't change
}else{
  Log.info("[accent]<MINDUSTRY-EXPANSION-LOG>\n[yellow]Missing mod soft-dependencies: 'rotatemindera'");
  modMindExp.description = Core.bundle.get("mod.description")+Core.bundle.get("mod.dependencies-warning"); -> still unavailable, don't change
}*/
