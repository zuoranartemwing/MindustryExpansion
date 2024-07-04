const modMindExp = Vars.mods.locateMod("mindustry-expansion").meta;

modMindExp.displayName = Core.bundle.get("mod.name");
modMindExp.author = Core.bundle.get("mod.author");
modMindExp.description = Core.bundle.get("mod.description");

/*<===> [ LET THIS CODE ] <===>
Will be updated later by Jab when Deltais is ready!

var extraDependencies = Vars.mods.locateMod("rotatemindera");

if(extraDependencies!=null){
  Log.info(Core.bundle.get("log.active-dependencies"));
  modMindExp.author = Core.bundle.get("mod.author") + Core.bundle.get("mod.contributor-dependencies");
  modMindExp.description = Core.bundle.get("mod.description") + Core.bundle.get("mod.description-dependencies");
}else{
  Log.info(Core.bundle.get("log.missing-dependencies"));
  modMindExp.author = Core.bundle.get("mod.author") + Core.bundle.get("mod.contributor-old");
  modMindExp.description = Core.bundle.get("mod.description") + Core.bundle.get("mod.description-no-dependencies");
};*/