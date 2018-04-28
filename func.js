$( document ).ready(function() {
    if(localStorage.getItem("data") != null) populateFields();
});

 function countBread(){
   var breadBox = parseFloat(document.getElementById("breadBox").value);
   var breadOpen = parseFloat(document.getElementById("breadOpen").value);
   var flatBox = parseFloat(document.getElementById("flatBox").value);
   var flatOpen = parseFloat(document.getElementById("flatOpen").value);
   var crossBox = parseFloat(document.getElementById("crossBox").value);
   var crossOpen = parseFloat(document.getElementById("crossOpen").value);
   var wrapBox = parseFloat(document.getElementById("wrapBox").value);
   var wrapOpen = parseFloat(document.getElementById("wrapOpen").value);
   var breadFront = parseFloat(document.getElementById("breadFront").value);
   var flatFront = parseFloat(document.getElementById("flatFront").value);
   var crossFront = parseFloat(document.getElementById("crossFront").value);
   var saladBag = parseFloat(document.getElementById("saladBag").value);
   var saladOpen = parseFloat(document.getElementById("saladOpen").value);
   var wrapFront= parseFloat(document.getElementById("wrapFront").value);
   var retarderBread = parseFloat(document.getElementById("retarderTotal").value);

   var saladTotal = (saladBag*56) + saladOpen;
   var freezerWrap = (wrapBox*72) + (wrapOpen*8);
   var freezerBread = (breadBox*70) + breadOpen;
   var freezerFlat = (flatBox*60) + (flatOpen*10);
   var freezerCross = (crossBox * 48) + crossOpen;

   var breadTotal = freezerBread + retarderBread + breadFront;
   var flatTotal = freezerFlat + flatFront;
   var wrapTotal = freezerCross + freezerWrap + wrapFront + crossFront;
   var dataFields = {breadBox, breadOpen, flatBox, flatOpen, crossBox, crossOpen, wrapBox, wrapOpen,
                     breadFront, flatFront, crossFront, saladBag, saladOpen, wrapFront, retarderBread}

   localStorage.setItem("data", JSON.stringify(dataFields));
   updateTotal(breadTotal, flatTotal, wrapTotal, saladTotal);
 }

function updateTotal(bT, fT, wT, sT){
  var breadCount = document.getElementById("breadCount");
  var flatCount = document.getElementById("flatCount");
  var wrapCount = document.getElementById("wrapCount");
  var saladCount = document.getElementById("saladCount");

  breadCount.innerHTML = "Bread Total = " + bT;
  flatCount.innerHTML = "FlatBread Total = " + fT;
  wrapCount.innerHTML = "Wrap Total = " + wT;
  saladCount.innerHTML = "Salad Bowl Total = " + sT;
}

function showFreezer(){
  var show = document.getElementById("freezerDrop");
  if(show.style.display == "none" || show.style.display == ""){
    show.style.display = "inline";
  }
  else{
    show.style.display = "none";
  }
}

function showRetarder(){
  var show = document.getElementById("retarderDrop");
  if(show.style.display == "none" || show.style.display == ""){
    show.style.display = "inline";
  }
  else{
    show.style.display = "none";
  }
}

function showWrap(){
  var show = document.getElementById("wrapDrop");
  if(show.style.display == "none" || show.style.display == ""){
    show.style.display = "inline";
  }
  else{
    show.style.display = "none";
  }
}

function showFront(){
  var show = document.getElementById("frontDrop");
  if(show.style.display == "none" || show.style.display == ""){
    show.style.display = "inline";
  }
  else{
    show.style.display = "none";
  }
}

setInterval(function(){
   countBread();
 }, 1000);

 function populateFields(){
   console.log("populating...")
   var data = localStorage.getItem("data");
   data = JSON.parse(data);

   document.getElementById("breadBox").value = data.breadBox;
   document.getElementById("breadOpen").value = data.breadOpen;
   document.getElementById("flatBox").value = data.flatBox;
   document.getElementById("flatOpen").value = data.flatOpen;
   document.getElementById("crossBox").value = data.crossBox;
   document.getElementById("crossOpen").value = data.crossOpen;
   document.getElementById("wrapBox").value = data.wrapBox;
   document.getElementById("wrapOpen").value = data.wrapOpen;

   document.getElementById("breadFront").value = data.breadFront;
   document.getElementById("flatFront").value = data.flatFront;
   document.getElementById("wrapFront").value = data.wrapFront;
   document.getElementById("crossFront").value = data.crossFront;

   document.getElementById("saladBag").value = data.saladBag;
   document.getElementById("saladOpen").value = data.saladOpen;

   document.getElementById("retarderTotal").value = data.retarderBread;

 }
