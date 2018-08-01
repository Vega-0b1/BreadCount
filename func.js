$( document ).ready(function() {
  addEvents();
  setDefaults();
  if(localStorage.getItem("defaults") != null) setSavedDefaults();
  if(localStorage.getItem("data") != null) populateFields();
});

var BreadBoxDefault, CroissantBoxDefault, CroissantTrayDefault, FlatBreadBoxDefault, FlatBreadBagDefault,
WrapBoxDefault, WrapBagDefault, SaladBagDefault;

function setDefaults(){
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

function countBread(){
   var breadBox = parseFloat(document.getElementById("breadBox").value);
   if(isNaN(breadBox))breadBox = 0;

   var breadOpen = parseFloat(document.getElementById("breadOpen").value);
   if(isNaN(breadOpen))breadOpen = 0;

   var flatBox = parseFloat(document.getElementById("flatBox").value);
   if(isNaN(flatBox))flatBox = 0;

   var flatOpen = parseFloat(document.getElementById("flatOpen").value);
   if(isNaN(flatOpen))flatOpen = 0;

   var crossBox = parseFloat(document.getElementById("crossBox").value);
   if(isNaN(crossBox))crossBox = 0;

   var crossOpen = parseFloat(document.getElementById("crossOpen").value);
   if(isNaN(crossOpen))crossOpen = 0;

   var wrapBox = parseFloat(document.getElementById("wrapBox").value);
   if(isNaN(wrapBox))wrapBox = 0;

   var wrapOpen = parseFloat(document.getElementById("wrapOpen").value);
   if(isNaN(wrapOpen))wrapOpen = 0;

   var breadFront1 = parseFloat(document.getElementById("breadFront1").value);
   if(isNaN(breadFront1))breadFront1 = 0;

   var breadFront2 = parseFloat(document.getElementById("breadFront2").value);
   if(isNaN(breadFront2))breadFront2 = 0;

   var flatFront1 = parseFloat(document.getElementById("flatFront1").value);
   if(isNaN(flatFront1))flatFront1 = 0;

   var flatFront2 = parseFloat(document.getElementById("flatFront2").value);
   if(isNaN(flatFront2))flatFront2 = 0;

   var crossFront = parseFloat(document.getElementById("crossFront").value);
   if(isNaN(crossFront))crossFront = 0;

   var saladBag = parseFloat(document.getElementById("saladBag").value);
   if(isNaN(saladBag))saladBag = 0;

   var saladOpen = parseFloat(document.getElementById("saladOpen").value);
   if(isNaN(saladOpen))saladOpen = 0;

   var wrapFront1= parseFloat(document.getElementById("wrapFront1").value);
   if(isNaN(wrapFront1))wrapFront1 = 0;

   var wrapFront2= parseFloat(document.getElementById("wrapFront2").value);
   if(isNaN(wrapFront2))wrapFront2 = 0;

   var retarderBread = parseFloat(document.getElementById("retarderBread").value);
   if(isNaN(retarderBread))retarderBread = 0;

   var saladTotal = (saladBag * SaladBagDefault) + saladOpen;
   var freezerWrap = (wrapBox * WrapBoxDefault) + (wrapOpen * WrapBagDefault);
   var freezerBread = (breadBox * BreadBoxDefault) + breadOpen;
   var freezerFlat = (flatBox * FlatBreadBoxDefault) + (flatOpen * FlatBreadBagDefault);
   var freezerCross = (crossBox * CroissantBoxDefault) + (crossOpen * CroissantTrayDefault);

   var breadTotal = freezerBread + retarderBread + breadFront1 + breadFront2;
   var flatTotal = freezerFlat + flatFront1 + flatFront2;
   var wrapTotal = freezerCross + freezerWrap + wrapFront1 + wrapFront2 + crossFront;

   var dataFields = {breadBox, breadOpen, flatBox, flatOpen, crossBox, crossOpen, retarderBread, wrapBox, wrapOpen,
                     breadFront1, flatFront1, wrapFront1, crossFront, breadFront2, flatFront2, wrapFront2, saladBag, saladOpen};

   localStorage.setItem("data", JSON.stringify(dataFields));
   updateTotal(breadTotal, flatTotal, wrapTotal, saladTotal);
 }

function updateTotal(bT, fT, wT, sT){
  $("#breadCount").html("Bread Total = " + bT);
  $("#flatCount").html("Flatbread Total = " + fT);
  $("#wrapCount").html("Wrap Total = " + wT);
  $("#saladCount").html("Salad Bowl Total = " + sT);
}

function populateFields(){
   var data = localStorage.getItem("data");
   data = JSON.parse(data);

   for(var i = 0; i <= 17; i++){
     var id = Object.keys(data)[i];
     document.getElementById(id).value = data[id];
  }
 }

function addEvents(){
  var btn = $(".menuButton");

  for(var i = 0; i < btn.length; i++){
    var id = btn[i].id;
    $("#" + id).click(function(){
        $("#" + this.id + "Drop").toggle(300);
    });
  }
}

function dropMenu(clickedId){
  var show = document.getElementById(clickedId + "Drop");
  if(show.style.display == "none" || show.style.display == ""){
    show.style.display = "inline";
  }
  else{
    show.style.display = "none";
  }
}

function resetValues(){
  var confirmation = confirm("Are you sure you want reset all values?");
  if(confirmation == true){
    var inputs = document.getElementsByClassName("inputs");

    for(var i = 0; i < inputs.length; i++){
      inputs[i].value = 0;
    }
  }
}

setInterval(function(){
   countBread();
 }, 1000);
