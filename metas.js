const metas = {
  nivel: 1000,
  beli: 1000000,
  gemas: 5000
};

function salvarMetas() {
  localStorage.setItem("kingLegacyMetas", JSON.stringify(metas));
}

function carregarMetas() {
  return JSON.parse(localStorage.getItem("kingLegacyMetas")) || metas;
}

console.log("King Legacy AI 4.4 carregado!");
console.log(carregarMetas());
