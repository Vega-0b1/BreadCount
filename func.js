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
   var breadFront1 = parseFloat(document.getElementById("breadFront1").value);
   var breadFront2 = parseFloat(document.getElementById("breadFront2").value);
   var flatFront1 = parseFloat(document.getElementById("flatFront1").value);
   var flatFront2 = parseFloat(document.getElementById("flatFront2").value);
   var crossFront = parseFloat(document.getElementById("crossFront").value);
   var saladBag = parseFloat(document.getElementById("saladBag").value);
   var saladOpen = parseFloat(document.getElementById("saladOpen").value);
   var wrapFront1= parseFloat(document.getElementById("wrapFront1").value);
   var wrapFront2= parseFloat(document.getElementById("wrapFront2").value);
   var retarderBread = parseFloat(document.getElementById("retarderTotal").value);

   var saladTotal = (saladBag*56) + saladOpen;
   var freezerWrap = (wrapBox*72) + (wrapOpen*8);
   var freezerBread = (breadBox*70) + breadOpen;
   var freezerFlat = (flatBox*60) + (flatOpen*10);
   var freezerCross = (crossBox * 48) + (crossOpen * 12);

   var breadTotal = freezerBread + (retarderBread * 10) + breadFront1 + breadFront2;
   var flatTotal = freezerFlat + flatFront1 + flatFront2;
   var wrapTotal = freezerCross + freezerWrap + wrapFront1 + wrapFront2 + crossFront;
   var dataFields = {breadBox, breadOpen, flatBox, flatOpen, crossBox, crossOpen, wrapBox, wrapOpen,
                     breadFront1, breadFront2, flatFront1, flatFront2, crossFront, saladBag, saladOpen, wrapFront1, wrapFront2, retarderBread}

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

function showCabinet1(){
  var show = document.getElementById("cabinet1Drop");
  if(show.style.display == "none" || show.style.display == ""){
    show.style.display = "inline";
  }
  else{
    show.style.display = "none";
  }
}

function showCabinet2(){
  var show = document.getElementById("cabinet2Drop");
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

   document.getElementById("breadFront1").value = data.breadFront1;
   document.getElementById("breadFront2").value = data.breadFront2;
   document.getElementById("flatFront1").value = data.flatFront1;
   document.getElementById("flatFront2").value = data.flatFront2;
   document.getElementById("wrapFront1").value = data.wrapFront1;
   document.getElementById("wrapFront2").value = data.wrapFront2;
   document.getElementById("crossFront").value = data.crossFront;

   document.getElementById("saladBag").value = data.saladBag;
   document.getElementById("saladOpen").value = data.saladOpen;

   document.getElementById("retarderTotal").value = data.retarderBread;

 }

function resetValues(){
  var confirmation = confirm("Are you sure you want reset all values?");
  if(confirmation == true){
    document.getElementById("breadBox").value = 0;
    document.getElementById("breadOpen").value = 0;
    document.getElementById("flatBox").value = 0;
    document.getElementById("flatOpen").value = 0;
    document.getElementById("crossBox").value = 0;
    document.getElementById("crossOpen").value = 0;
    document.getElementById("wrapBox").value = 0;
    document.getElementById("wrapOpen").value = 0;

    document.getElementById("breadFront1").value = 0;
    document.getElementById("flatFront1").value = 0;
    document.getElementById("wrapFront1").value = 0;
    document.getElementById("breadFront2").value = 0;
    document.getElementById("flatFront2").value = 0;
    document.getElementById("wrapFront2").value = 0;
    document.getElementById("crossFront").value = 0;

    document.getElementById("saladBag").value = 0;
    document.getElementById("saladOpen").value = 0;

    document.getElementById("retarderTotal").value = 0;
  }
}
