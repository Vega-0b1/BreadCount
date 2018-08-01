$( document ).ready(function() {
  loadDefaults();
  if(localStorage.getItem("defaults") != null) setSavedDefaults();
  populateDefaults();
});

var BreadBoxDefault, CroissantBoxDefault, CroissantTrayDefault, FlatBreadBoxDefault, FlatBreadBagDefault,
WrapBoxDefault, WrapBagDefault, SaladBagDefault;

function loadDefaults(){
  BreadBoxDefault = 80;
  CroissantBoxDefault = 48;
  CroissantTrayDefault = 12;
  FlatBreadBoxDefault = 60;
  FlatBreadBagDefault = 10;
  WrapBoxDefault = 72;
  WrapBagDefault = 8;
  SaladBagDefault = 56;
}

function setSavedDefaults(){
  console.log("setting defaults");
  var defaults = localStorage.getItem("defaults");
  defaults = JSON.parse(defaults);

  BreadBoxDefault = defaults["BreadBoxDefault"];
  FlatBreadBoxDefault = defaults["FlatBreadBoxDefault"];
  FlatBreadBagDefault = defaults["FlatBreadBagDefault"];
  CroissantBoxDefault = defaults["CroissantBoxDefault"];
  CroissantTrayDefault = defaults["CroissantTrayDefault"];
  WrapBoxDefault = defaults["WrapBoxDefault"];
  WrapBagDefault = defaults["WrapBagDefault"];
  SaladBagDefault = defaults["SaladBagDefault"];
}

function populateDefaults(){
  document.getElementById("BreadBoxDefault").value = BreadBoxDefault;
  document.getElementById("FlatBreadBoxDefault").value = FlatBreadBoxDefault;
  document.getElementById("FlatBreadBagDefault").value = FlatBreadBagDefault;
  document.getElementById("WrapBoxDefault").value = WrapBoxDefault;
  document.getElementById("WrapBagDefault").value = WrapBagDefault;
  document.getElementById("CroissantBoxDefault").value = CroissantBoxDefault;
  document.getElementById("CroissantTrayDefault").value = CroissantTrayDefault;
  document.getElementById("SaladBagDefault").value = SaladBagDefault;
}

function saveDefault(){
  var BreadBoxDefault = parseFloat(document.getElementById("BreadBoxDefault").value);
  var FlatBreadBoxDefault = parseFloat(document.getElementById("FlatBreadBoxDefault").value);
  var FlatBreadBagDefault = parseFloat(document.getElementById("FlatBreadBagDefault").value);
  var CroissantBoxDefault = parseFloat(document.getElementById("CroissantBoxDefault").value);
  var CroissantTrayDefault = parseFloat(document.getElementById("CroissantTrayDefault").value);
  var WrapBoxDefault = parseFloat(document.getElementById("WrapBoxDefault").value);
  var WrapBagDefault = parseFloat(document.getElementById("WrapBagDefault").value);
  var SaladBagDefault = parseFloat(document.getElementById("SaladBagDefault").value);

  var defaults = { BreadBoxDefault, FlatBreadBoxDefault, FlatBreadBagDefault, CroissantBoxDefault,
  CroissantTrayDefault, WrapBoxDefault, WrapBagDefault, SaladBagDefault};

  localStorage.setItem("defaults", JSON.stringify(defaults));
  alert("User Defaults Saved!");
}
