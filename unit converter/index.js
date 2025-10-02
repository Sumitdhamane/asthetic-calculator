function celToFar() {
  let degree = document.getElementById("temp").value;
  let result = (degree * 9) / 5 + 32;
  document.getElementById("result").innerText = result.toFixed(2) + " °F";
}

function FarToCel() {
  let degree = document.getElementById("temp").value;
  let result = (5 / 9) * (degree - 32);
  document.getElementById("result").innerText = result.toFixed(2) + " °C";
}

function MtoCM() {
  let meter = document.getElementById("temp").value;
  let result = meter * 100;
  document.getElementById("result").innerText = result.toFixed(2) + " CM";
}
function CMtoM() {
  let meter = document.getElementById("temp").value;
  let result = meter / 10;
  document.getElementById("result").innerText = result.toFixed(2) + " M";
}
function GramtoKG() {
  let meter = document.getElementById("temp").value;
  let result = meter / 1000;
  document.getElementById("result").innerText = result.toFixed(2) + " KG";
}
function KGtoGram() {
  let meter = document.getElementById("temp").value;
  let result = meter * 1000;
  document.getElementById("result").innerText = result.toFixed(2) + " G";
}
