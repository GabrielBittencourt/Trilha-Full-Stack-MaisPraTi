let contador = 0;
let numeroAtual = 101;

while (contador < 50) {
    let divisor = 2;
    let divisoes = 0;
    while (divisor < numeroAtual && divisoes <= 1) {
        if (numeroAtual % divisor == 0) {
            ++divisoes;
        }
        ++divisor;
    }
    if (divisoes == 1) {
        console.log(numeroAtual);
        ++contador;
    }
    ++numeroAtual;
}
