function verificar() {
      const media = parseFloat(document.getElementById('media').value);
      const disciplina = document.getElementById('disciplina').value;
      const dias = parseInt(document.getElementById('dias').value);
      const faltas = parseInt(document.getElementById('faltas').value);

      if (isNaN(media) || isNaN(dias) || isNaN(faltas) || disciplina.trim() === '') {
            alert('Preencha todos os campos.');
            return;
      }

      const frequencia = ((dias - faltas) / dias) * 100;
      const aprovado = media >= 7 && frequencia >= 75;

      const resultado = `
       <p>Disciplina Atual: ${disciplina}</p>
       <p>Quantidade de Dias de Aula: ${dias}</p>
       <p>Faltas: ${faltas}</p>
          <p>Média: ${media}</p>        
          <p>Frequência: ${frequencia.toFixed(2)}%</p>
          <p>Resultado: ${aprovado ? 'Aprovado' : 'Reprovado'}</p>
      `;

      document.getElementById('resultado').innerHTML = resultado;
}

function limpar() {
      document.getElementById('media').value = '';
      document.getElementById('disciplina').value = '';
      document.getElementById('dias').value = '';
      document.getElementById('faltas').value = '';
      document.getElementById('resultado').innerHTML = '';
}