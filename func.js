$( document ).ready(function() {
  addEvents();
    if(localStorage.getItem("data") != null) populateFields();
});

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

   var saladTotal = (saladBag*56) + saladOpen;
   var freezerWrap = (wrapBox*72) + (wrapOpen*8);
   var freezerBread = (breadBox*70) + breadOpen;
   var freezerFlat = (flatBox*60) + (flatOpen*10);
   var freezerCross = (crossBox * 48) + (crossOpen * 12);

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
  var btn = document.getElementsByClassName("menuButton");
  for(var i = 0; i < btn.length; i++){
    btn[i].addEventListener("click", function(){ dropMenu(this.id); });
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
