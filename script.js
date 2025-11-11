function solve() {
  const baseNum = parseFloat(document.getElementById("baseNum").value);
  const baseDen = parseFloat(document.getElementById("baseDen").value);
  const periodNum = parseFloat(document.getElementById("periodNum").value);
  const domMin = parseFloat(document.getElementById("domMin").value) * Math.PI;
  const domMax = parseFloat(document.getElementById("domMax").value) * Math.PI;

  const base = (baseNum / baseDen) * Math.PI;
  const period = periodNum * Math.PI;

  let results = [];

  let kMin = Math.ceil((domMin - base) / period);
  let kMax = Math.floor((domMax - base) / period);

  for (let k = kMin; k <= kMax; k++) {
    results.push(base + k * period);
  }

  results.sort((a,b)=>a-b);

  const out = document.getElementById("out");
  if(results.length === 0){
    out.textContent = "No solutions in domain.";
    return;
  }

  function asPi(x){
    let q = x / Math.PI;
    return q === Math.round(q) ? `${q}π` : `${q}π ≈ ${x.toFixed(6)}`;
  }

  out.textContent = results.map(x => "x = " + asPi(x)).join("\n");
}

document.getElementById("solve").onclick = solve;