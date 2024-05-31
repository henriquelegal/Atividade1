let time1, time2, gols1, gols2, placar;


time1 = prompt("Digite o nome do time 1");
time2 = prompt("Digite o nome do time 2");
gols1 = parseFloat(prompt(`Digite o número de gols do ${time1}`));
gols2 = parseFloat(prompt(`Digite o número de gols do ${time2}`));

if (gols1 > gols2) {
    placar = "O " + time1 + " ganhou de " + gols1 + "X" + gols2 + " do " + time2;
} else if (gols2 > gols1) {
    placar = "O " + time2 + " ganhou de " + gols2 + "X" + gols1 + " do " + time1;
} else {
    placar = "O jogo terminou empatado em " + gols1 + "X" + gols2;
}
alert(placar);