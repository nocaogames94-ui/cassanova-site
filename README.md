<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CYBER ORACLE | PROTOCOL</title>
    <style>
        :root { --main: #ff0000; --bg: #050000; }
        body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: var(--bg); font-family: 'Courier New', monospace; color: var(--main); }
        
        /* Fundo de Scanline */
        body::before { content: " "; display: block; position: absolute; top: 0; left: 0; bottom: 0; right: 0; background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06)); z-index: 2; background-size: 100% 2px, 3px 100%; pointer-events: none; }

        #stage { position: relative; z-index: 10; width: 100vw; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; }
        .glitch-title { font-size: 1.8rem; text-shadow: 2px 2px #550000; border: 1px solid var(--main); padding: 10px; box-shadow: 0 0 15px var(--main); }

        /* Menu Flutuante Superior */
        .nav-top { position: fixed; top: 20px; width: 100%; display: flex; justify-content: space-around; z-index: 100; }
        .nav-top button { background: none; border: 1px solid var(--main); color: var(--main); padding: 8px 12px; font-size: 0.7rem; font-weight: bold; cursor: pointer; text-transform: uppercase; }

        /* Jogo de Reação */
        #hit-box { width: 80px; height: 80px; background: var(--main); border-radius: 50%; display: none; cursor: pointer; box-shadow: 0 0 20px var(--main); }

        /* Estilo House (Cores Pulsantes) */
        @keyframes pulse { 0% { background: #ff0000; } 50% { background: #220000; } 100% { background: #ff0000; } }
        .mode-house { animation: pulse 0.5s infinite; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; }
    </style>
</head>
<body>

<div class="nav-top">
    <button onclick="runOracle()">Oracle</button>
    <button onclick="runSpeed()">Speed Test</button>
    <button onclick="runVisual()">Vibe</button>
</div>

<div id="stage">
    <h1 class="glitch-title">CASSANOVA ORACLE</h1>
    <p style="font-size: 0.8rem; opacity: 0.6;">Aguardando autorização...</p>
</div>

<script>
    const stage = document.getElementById('stage');
    let gameInterval;

    function clear() {
        stage.innerHTML = '';
        stage.className = '';
        clearInterval(gameInterval);
    }

    // ABA 1: ORACLE (Frases Underground)
    function runOracle() {
        clear();
        const frases = [
            "O SISTEMA É UMA MENTIRA CONFORTÁVEL.",
            "ELES TE VÊEM, MAS VOCÊ É INVISÍVEL.",
            "A VERDADE DÓI, O CÓDIGO LIBERTA.",
            "CASSANOVA NÃO É UM NOME, É UM VÍRUS."
        ];
        stage.innerHTML = `<h2 style="padding:20px; text-align:center;">${frases[Math.floor(Math.random()*frases.length)]}</h2>`;
    }

    // ABA 2: SPEED TEST (Novo Joguinho)
    function runSpeed() {
        clear();
        stage.innerHTML = '<h3>CLIQUE NO ALVO VERMELHO!</h3><div id="hit-box"></div>';
        const box = document.getElementById('hit-box');
        
        function moveBox() {
            box.style.display = 'block';
            box.style.position = 'absolute';
            box.style.top = Math.random() * 70 + 15 + '%';
            box.style.left = Math.random() * 70 + 15 + '%';
        }
        
        box.onclick = () => {
            box.style.display = 'none';
            setTimeout(moveBox, Math.random() * 1000 + 500);
        };
        moveBox();
    }

    // ABA 3: VISUAL (O Truque Cassanova/Nandex no novo tema)
    function runVisual() {
        clear();
        stage.className = 'mode-house';
        stage.innerHTML = '<h1 id="txt" style="color:white; font-size:3rem;"></h1>';
        gameInterval = setInterval(() => {
            const h = document.getElementById('txt');
            if(h) {
                const bg = window.getComputedStyle(stage).backgroundColor;
                h.innerText = bg.includes('255') ? "CASSANOVA" : "NANDEX";
            }
        }, 100);
    }
</script>
</body>
</html>
