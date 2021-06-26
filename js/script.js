function contar() {
  let ini = document.getElementById("txtInicio");
  let fim = document.getElementById("txtFim");
  let passo = document.getElementById("txtPasso");
  let resposta = document.getElementById("resposta");

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    resposta.innerHTML = `
      <p class="alert alert-danger" role="alert">
        <strong>Oops!</strong> Preencheu todos os campos?
      </p>
    `;
  }
  else {
    resposta.innerHTML = "<strong>Contando:</strong><br>";

    let i = Number(ini.value);
    let f = Number(fim.value);
    let p = Number(passo.value);

    /**
     * Não aceitar valor menor ou igual a zero no campo
     * "passo". Se acontecer, será considerado passo 1
     */
    if (p <= 0) {
      window.alert("Passo inválido! Considerando PASSO 1");
      p = 1;
    }

    /**
     * Faz a contagem de forma crescente ou decrescente com
     * base nos valores dos campos "Inicio" e "Fim"
     */
    if (i < f) {
      // Contagem crescente
      for (let c = i; c <= f; c += p) {
        resposta.innerHTML += `${c} \u{1F449}	`;
      }
    } 
    else {
      // Contagem regressiva
      for (let c = i; c >= f; c -= p) {
        resposta.innerHTML += `${c} \u{1F449} `;
      }
    }
    resposta.innerHTML += `\u{1F3C1}`;  
  }
}
