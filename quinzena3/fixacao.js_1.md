function calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
    // Escreva seu código aqui
    let salarioFixo = Number(2000)
    let valorTotalVendas = Number (130000)
    let qtdeCarrosVendidos = Number (3)
    let comissao = Number (valorTotalVendas / 100) * 5
    let comissaoTotal = Number (qtdeCarrosVendidos * 100) + comissao
    let salarioTotal = (comissaoTotal + 2000)
    console.log(salarioTotal)
}
console.log(calculaSalario())
