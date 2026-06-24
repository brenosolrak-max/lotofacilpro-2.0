function gerarJogo() {

    let dezenas = [];

    while (dezenas.length < 15) {
        let numero = Math.floor(Math.random() * 25) + 1;

        if (!dezenas.includes(numero)) {
            dezenas.push(numero);
        }
    }

    dezenas.sort((a, b) => a - b);

    document.getElementById("resultado").innerHTML =
        "<h2>Jogo Gerado</h2>" +
        dezenas.map(n => n.toString().padStart(2, "0")).join(" - ");
}

function gerar5Jogos() {

    let html = "<h2>5 Jogos</h2>";

    for (let i = 1; i <= 5; i++) {

        let jogo = [];

        while (jogo.length < 15) {

            let numero = Math.floor(Math.random() * 25) + 1;

            if (!jogo.includes(numero)) {
                jogo.push(numero);
            }
        }

        jogo.sort((a, b) => a - b);

        html += `
        <p>
        <strong>Jogo ${i}</strong><br>
        ${jogo.map(n => n.toString().padStart(2, "0")).join(" - ")}
        </p>
        `;
    }

    document.getElementById("resultado").innerHTML = html;
}

function gerarMatriz18() {

    let base = [];

    while (base.length < 18) {

        let numero = Math.floor(Math.random() * 25) + 1;

        if (!base.includes(numero)) {
            base.push(numero);
        }
    }

    base.sort((a, b) => a - b);

    let html = "<h2>Matriz 18 Dezenas</h2>";

    html += "<p><strong>Base:</strong><br>";
    html += base.map(n => n.toString().padStart(2, "0")).join(" - ");
    html += "</p>";

    for (let i = 1; i <= 5; i++) {

        let jogo = [...base];

        while (jogo.length > 15) {

            jogo.splice(
                Math.floor(Math.random() * jogo.length),
                1
            );
        }

        jogo.sort((a, b) => a - b);

        html += `
        <p>
        <strong>Jogo ${i}</strong><br>
        ${jogo.map(n => n.toString().padStart(2, "0")).join(" - ")}
        </p>
        `;
    }

    document.getElementById("resultado").innerHTML = html;
}