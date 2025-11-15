const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
  const nome = frm.inNome.value;
  const num001 = Number(frm.inNum001.value);
  const num002 = Number(frm.inNum002.value);

  const soma = num001 + num002;
  resp.innerText = `Ola ${nome}\nA Soma dos valores digitados é ${soma}`;

  e.preventDefault();
});
