let idade, categoria;

idade = parseInt(prompt("Digite a idade do nadador:"));

if (idade >= 5 && idade <= 7) {
    categoria = "Infantil A";
} else if (idade >= 8 && idade <= 10) {
    categoria = "Infantil B";
} else if (idade >= 11 && idade <= 13) {
    categoria = "Juvenil A";
} else if (idade >= 14 && idade <= 17) {
    categoria = "Juvenil B";
} else if (idade >= 18) {
    categoria = "Adulto";
} else {
    categoria = "Idade fora das categorias";
}

alert("Idade do nadador: " + idade + " anos\n" +
      "Categoria: " + categoria);