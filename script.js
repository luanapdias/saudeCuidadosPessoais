function formatarEntrada(input) {
    let valor = input.value.replace(/[^0-9]/g, '');
    
    if (valor.length > 2) {
        valor = valor.slice(0, -2) + '.' + valor.slice(-2);
    }
    
    input.value = valor;
}

function calcularIMC() {
    let peso = document.getElementById('peso').value.trim();
    let altura = document.getElementById('altura').value.trim();

    peso = peso.replace(',', '.');
    altura = altura.replace(',', '.');

    peso = parseFloat(peso);
    altura = parseFloat(altura);

    if (isNaN(peso) || peso <= 0 || isNaN(altura) || altura <= 0 || altura > 3 || peso > 300) {
        document.getElementById('resultadoIMC').innerHTML = '';
        document.getElementById('categoriaIMC').innerHTML = 'Por favor, insira valores válidos para peso e altura. Altura deve estar em metros e peso em quilogramas.';
        return;
    }

    const imc = peso / (altura * altura);

    document.getElementById('resultadoIMC').innerHTML = `Seu IMC é ${imc.toFixed(2)}.`;

    let categoria;
    if (imc < 18.5) {
        categoria = 'baixo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = 'peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        categoria = 'sobrepeso';
    } else if (imc >= 30 && imc < 34.9) {
        categoria = 'obesidade grau I';
    } else if (imc >= 35 && imc < 39.9) {
        categoria = 'obesidade grau II';
    } else {
        categoria = 'obesidade grau III';
    }

    document.getElementById('categoriaIMC').innerHTML = `Categoria: ${categoria}`;
}

function destacarTitulo(sectionId) {
    const allTitles = document.querySelectorAll('section h2');
    allTitles.forEach(title => title.classList.remove('highlight'));

    const titulo = document.querySelector(`#${sectionId} h2`);
    if (titulo) {
        titulo.classList.add('highlight');

        setTimeout(() => {
            titulo.classList.remove('highlight');
        }, 2000);
    }
}

function toggleMenu() {
    const navList = document.getElementById('navList');
    navList.classList.toggle('show');
}

// Adicionar ouvintes de evento para formatação em tempo real
document.getElementById('peso').addEventListener('input', function() {
    formatarEntrada(this);
});

document.getElementById('altura').addEventListener('input', function() {
    formatarEntrada(this);
});
