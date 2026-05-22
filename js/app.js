console.log("CHSP Bolão");

async function carregarRanking() {
  const resposta = await fetch("data/ranking.json");
  const dados = await resposta.json();

  // ordena do maior para o menor
  dados.sort((a, b) => b.pontos - a.pontos);

  const tbody = document.getElementById("tabela-ranking");
  tbody.innerHTML = "";

  dados.forEach((item, index) => {
    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.nome}</td>
      <td>${item.pontos}</td>
    `;

    tbody.appendChild(linha);
  });
}

carregarRanking();
