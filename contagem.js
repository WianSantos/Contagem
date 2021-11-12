let calcular = () => {
  // pegar as informações do html
  var ini = document.getElementById('txti')
  var fim = document.getElementById('txtf')
  var passo = document.getElementById('txtp')
  var res = document.getElementById('res')
  // verificar se tem algum valor com 0
  if (
    ini.value.length == 0 ||
    fim.value.length == 0 ||
    passo.value.length == 0
  ) {
    res.innerHTML = 'Impossivel contar!'
    window.alert('Erro, faltam dados')
    // caso não tenha inicie a contagem do for
  } else {
    // mensagem trocada do res
    res.innerHTML = 'Contando: <br>'
    // transforma as informações do html em número
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
      window.alert('Passo inválido! Considerando PASSO 1')
      p = 1
    }
    // no for não esquecer de usar o +=, se não ele não realiza a soma.
    if (i < f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    } else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
}
