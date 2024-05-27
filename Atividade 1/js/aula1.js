let valorGas, valorAba, litros

valorGas=5.86;
valorAba=parseFloat(prompt("digite o valor que deseja colocar"));
litros=valorAba/valorGas;

alert(`Voce abasteceu ${litros.toFixed(2)} litros`)