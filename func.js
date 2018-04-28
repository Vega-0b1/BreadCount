 var breadTotal = 0;
 var flatTotal = 0;
 var wrapTotal = 0;
 var saladTotal = 0;

 var freezerBread = 0;
 var freezerFlat = 0;
 var freezerCross = 0;
 var freezerWrap = 0;

 var retarderBread = 0;

 var breadFront = 0;
 var flatFront = 0;
 var wrapFront = 0;
 var crossFront = 0;

 function countFreezer(){
   var breadBox = parseFloat(document.getElementById("breadBox").value);
   var breadOpen = parseFloat(document.getElementById("breadOpen").value);
   var flatBox = parseFloat(document.getElementById("flatBox").value);
   var flatOpen = parseFloat(document.getElementById("flatOpen").value);
   var crossBox = parseFloat(document.getElementById("crossBox").value);
   var crossOpen = parseFloat(document.getElementById("crossOpen").value);
   var wrapBox = parseFloat(document.getElementById("wrapBox").value);
   var wrapOpen = parseFloat(document.getElementById("wrapOpen").value);
   breadFront = parseFloat(document.getElementById("breadFront").value)
   flatFront = parseFloat(document.getElementById("flatFront").value)
   crossFront = parseFloat(document.getElementById("crossFront").value)
   var saladBag = parseFloat(document.getElementById("saladBag").value)
   var saladOpen = parseFloat(document.getElementById("saladOpen").value)
   wrapFront= parseFloat(document.getElementById("wrapFront").value)

   retarderBread = parseFloat(document.getElementById("retarderTotal").value)
   saladTotal = (saladBag*56) + saladOpen;

   freezerWrap = (wrapBox*72) + (wrapOpen*8)
   freezerBread = (breadBox*70) + breadOpen;
   freezerFlat = (flatBox*60) + (flatOpen*10);
   freezerCross = (crossBox * 48) + crossOpen;
 }

function calc(){
  countFreezer();
  breadTotal = freezerBread + retarderBread + breadFront;
  flatTotal = freezerFlat + flatFront;
  wrapTotal = freezerCross + freezerWrap + wrapFront + crossFront;

  var breadCount = document.getElementById("breadCount");
  var flatCount = document.getElementById("flatCount");
  var wrapCount = document.getElementById("wrapCount");
  var saladCount = document.getElementById("saladCount");

  breadCount.innerHTML = "Bread Total = " + breadTotal;
  flatCount.innerHTML = "FlatBread Total = " + flatTotal;
  wrapCount.innerHTML = "Wrap Total = " + wrapTotal;
  saladCount.innerHTML = "Salad Bowl Total = " + saladTotal;
}

function showFreezer(){
  var show = document.getElementById("freezerDrop");
  console.log(show.style.display);
  if(show.style.display == "none" || show.style.display == ""){
    show.style.display = "inline";
  }
  else{
    show.style.display = "none";
  }
}

function showRetarder(){
  var show = document.getElementById("retarderDrop");
  console.log(show.style.display);
  if(show.style.display == "none" || show.style.display == ""){
    show.style.display = "inline";
  }
  else{
    show.style.display = "none";
  }
}

function showWrap(){
  var show = document.getElementById("wrapDrop");
  console.log(show.style.display);
  if(show.style.display == "none" || show.style.display == ""){
    show.style.display = "inline";
  }
  else{
    show.style.display = "none";
  }
}

function showFront(){
  var show = document.getElementById("frontDrop");
  console.log(show.style.display);
  if(show.style.display == "none" || show.style.display == ""){
    show.style.display = "inline";
  }
  else{
    show.style.display = "none";
  }
}

setInterval(function(){
   calc();
 }, 1000);
