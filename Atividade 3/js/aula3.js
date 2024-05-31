let modeloVeiculo, distancia, tempo, velocidadeMedia;


modeloVeiculo = prompt("Digite o nome do veículo (modelo):");
distancia = parseFloat(prompt("Digite a distância percorrida (em km):"));
tempo = parseFloat(prompt("Digite o tempo gasto (em horas):"));
velocidadeMedia = distancia / tempo;

alert("Modelo do veículo: " + modeloVeiculo + "\n" +
      "Distância percorrida: " + distancia + " km\n" +
      "Tempo gasto: " + tempo + " horas\n" +
      "Velocidade média: " + velocidadeMedia + " km/h");