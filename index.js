const numeroTabuadaInput = document.getElementById('numeroTabuada');
const btnGerar = document.getElementById('btnGerar');
const resultadoTabuada = document.getElementById('resultadoTabuada');

const nivelSelect = document.getElementById('nivel');
const btnNova = document.getElementById('btnNova');
const perguntaEl = document.getElementById('pergunta');
const respostaInput = document.getElementById('resposta');
const btnVerificar = document.getElementById('btnVerificar');
const feedbackEl = document.getElementById('feedback');

const acertosEl = document.getElementById('acertos');
const errosEl = document.getElementById('erros');
const pontosEl = document.getElementById('pontos');
const taxaEl = document.getElementById('taxa');

const qtdQuestoesInput = document.getElementById('qtdQuestoes');
const nivelFolhaSelect = document.getElementById('nivelFolha');
const mostrarGabaritoInput = document.getElementById('mostrarGabarito');
const btnGerarFolha = document.getElementById('btnGerarFolha');
const btnImprimirFolha = document.getElementById('btnImprimirFolha');
const listaExerciciosEl = document.getElementById('listaExercicios');

const limites = {
  facil: 5,
  medio: 10,
  dificil: 12
};

let perguntaAtual = null;
let acertos = 0;
let erros = 0;
let pontos = 0;

function valorAleatorioMaximo(limite) {
  return Math.floor(Math.random() * limite) + 1;
}

function gerarTabuada() {
  let numero = Number(numeroTabuadaInput.value);

  if (!Number.isInteger(numero) || numero < 1 || numero > 12) {
    numero = 1;
    numeroTabuadaInput.value = '1';
  }

  resultadoTabuada.innerHTML = '';

  for (let i = 1; i <= 12; i += 1) {
    const item = document.createElement('li');
    item.textContent = `${numero} × ${i} = ${numero * i}`;
    resultadoTabuada.appendChild(item);
  }
}

function sortearPergunta() {
  const limite = limites[nivelSelect.value] || 10;
  const a = valorAleatorioMaximo(limite);
  const b = valorAleatorioMaximo(limite);

  perguntaAtual = {
    a,
    b,
    resposta: a * b
  };

  perguntaEl.textContent = `${a} × ${b} = ?`;
  feedbackEl.textContent = '';
  feedbackEl.className = 'feedback';
  respostaInput.value = '';
  respostaInput.focus();
}

function atualizarPlacar() {
  const total = acertos + erros;
  const taxa = total === 0 ? 0 : Math.round((acertos / total) * 100);

  acertosEl.textContent = acertos;
  errosEl.textContent = erros;
  pontosEl.textContent = pontos;
  taxaEl.textContent = `${taxa}%`;
}

function verificarResposta() {
  if (!perguntaAtual) {
    sortearPergunta();
    return;
  }

  const resposta = Number(respostaInput.value);
  if (!Number.isFinite(resposta)) {
    feedbackEl.textContent = 'Digite um número para responder.';
    feedbackEl.className = 'feedback erro';
    return;
  }

  if (resposta === perguntaAtual.resposta) {
    acertos += 1;
    pontos += 10;
    feedbackEl.textContent = 'Excelente! Resposta correta 🎉';
    feedbackEl.className = 'feedback ok';
  } else {
    erros += 1;
    pontos = Math.max(0, pontos - 3);
    feedbackEl.textContent = `Quase! A resposta correta é ${perguntaAtual.resposta}.`;
    feedbackEl.className = 'feedback erro';
  }

  atualizarPlacar();
  setTimeout(sortearPergunta, 700);
}

function gerarFolhaExercicios() {
  const limite = limites[nivelFolhaSelect.value] || 10;
  let quantidade = Number(qtdQuestoesInput.value);

  if (!Number.isInteger(quantidade) || quantidade < 6 || quantidade > 60) {
    quantidade = 20;
    qtdQuestoesInput.value = '20';
  }

  const exibirGabarito = mostrarGabaritoInput.checked;
  listaExerciciosEl.innerHTML = '';

  for (let i = 1; i <= quantidade; i += 1) {
    const a = valorAleatorioMaximo(limite);
    const b = valorAleatorioMaximo(limite);
    const resposta = a * b;
    const item = document.createElement('li');

    item.textContent = `${a} × ${b} = ______`;

    if (exibirGabarito) {
      const gabarito = document.createElement('span');
      gabarito.className = 'gabarito';
      gabarito.textContent = `  (gabarito: ${resposta})`;
      item.appendChild(gabarito);
    }

    listaExerciciosEl.appendChild(item);
  }
}

function imprimirFolha() {
  window.print();
}

btnGerar.addEventListener('click', gerarTabuada);
btnNova.addEventListener('click', sortearPergunta);
btnVerificar.addEventListener('click', verificarResposta);
btnGerarFolha.addEventListener('click', gerarFolhaExercicios);
btnImprimirFolha.addEventListener('click', imprimirFolha);

respostaInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    verificarResposta();
  }
});

numeroTabuadaInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    gerarTabuada();
  }
});

window.addEventListener('DOMContentLoaded', () => {
  gerarTabuada();
  sortearPergunta();
  atualizarPlacar();
  gerarFolhaExercicios();
});