function calcular(){
    let valorunit = document.getElementById('numing').value
    let custo = document.getElementById('custoev').value
    let res = document.getElementById('b3')
    custo = Number(custo)
    ingresvend = Number(custo)

    let qtde = Math.ceil(custo / valorunit);

    res.innerHTML = ''
    res.innerHTML += `<p>Você precisa vender ${qtde} ingressos para custear o evento.</p>`

    valorunit.value = '' 
    custo.value = ''
    valorunit.focus()

}