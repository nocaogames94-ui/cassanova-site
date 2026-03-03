<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CASSANOVA PROTOCOL</title>
    <style>
        :root { --neon: #00ff00; --bg: #000; }
        body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #000; font-family: 'Courier New', monospace; }
        canvas { position: fixed; top: 0; left: 0; z-index: 1; opacity: 0.3; }
        
        #stage { width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; position: relative; z-index: 5; }
        #content { text-align: center; padding: 20px; }
        .glitch { font-size: 3rem; font-weight: bold; color: var(--neon); text-shadow: 0 0 15px var(--neon); text-transform: uppercase; }

        /* Menu */
        .nav { position: fixed; bottom: 25px; left: 25px; z-index: 1000; }
        .bars { width: 35px; cursor: pointer; display: flex; flex-direction: column; gap: 6px; }
        .bars span { height: 4px; background: var(--neon); width: 100%; box-shadow: 0 0 10px var(--neon); }
        .menu-box { display: none; background: rgba(0,0,0,0.9); border: 1px solid var(--neon); padding: 15px; margin-bottom: 10px; }
        button { display: block; width: 180px; background: none; border: 1px solid var(--neon); color: var(--neon); padding: 10px; margin: 5px 0; cursor: pointer; font-weight: bold; text-transform: uppercase; }

        /* Protocolo House */
        @keyframes house-flash { 0%, 100% { background: #f00; } 50% { background: #800080; } }
        .mode-house { animation: house-flash 1.5s infinite; }
        .mode-house #htext { color: white; text-shadow: 2px 2px #000; }
    </style>
</head>
<body>

<canvas id="matrix"></canvas>

<div id="stage">
    <div id="content">
        <h1 class="glitch">CASSANOVA.EXE</h1>
        <p style="color: #666;">SISTEMA ONLINE - AGUARDANDO COMANDO</p>
    </div>
</div>

<div class="nav">
    <div id="menu-box" class="menu-box">
        <button onclick="runHouse()">PROTOCOLO HOUSE</button>
        <button onclick="runPhilo()">UNDERGROUND PHILO</button>
        <button onclick="runMemory()">MEMORY HACK</button>
    </div>
    <div class="bars" onclick="toggleMenu()">
        <span></span><span></span><span></span>
    </div>
</div>

<script>
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');
    const stage = document.getElementById('stage');
    const content = document.getElementById('content');
    let loop;

    // Efeito Matrix de fundo
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const chars = "0101010101CASSANOVANANDEX0101";
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops = Array(Math.floor(columns)).fill(1);

    function drawMatrix() {
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#0f0";
        ctx.font = fontSize + "px monospace";
        for (let i = 0; i < drops.length; i++) {
            const text = chars.charAt(Math.floor(Math.random() * chars.length));
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
            drops[i]++;
        }
    }
    setInterval(drawMatrix, 50);

    function toggleMenu() {
        const m = document.getElementById('menu-box');
        m.style.display = m.style.display === 'block' ? 'none' : 'block';
    }

    function reset() {
        clearInterval(loop);
        stage.className = '';
        stage.style.background = 'transparent';
        content.innerHTML = '';
        toggleMenu();
    }

    function runHouse() {
        reset();
        stage.className = 'mode-house';
        content.innerHTML = '<h1 class="glitch" id="htext"></h1>';
        loop = setInterval(() => {
            const bg = window.getComputedStyle(stage).backgroundColor;
            document.getElementById('htext').innerText = bg.includes('255') ? "CASSANOVA" : "NANDEX";
        }, 100);
    }

    function runPhilo() {
        reset();
        const frases = ["A REALIDADE É UMA FALHA NO SISTEMA.", "CODIFICAR É A ÚNICA LIBERDADE.", "O VAZIO TE OBSERVA.", "CASSANOVA IS EVERYWHERE."];
        content.innerHTML = `<h2 class="glitch" style="font-size:1.5rem">"${frases[Math.floor(Math.random()*frases.length)]}"</h2>`;
    }

    function runMemory() {
        reset();
        content.innerHTML = '<h3 style="color:#0f0">MEMÓRIA CORROMPIDA</h3><div style="display:grid; grid-template-columns:repeat(3,1fr); gap:10px;" id="grid"></div>';
        for(let i=0; i<9; i++) {
            const b = document.createElement('div');
            b.style = "width:60px; height:60px; border:1px solid #0f0; display:flex; align-items:center; justify-content:center; cursor:pointer;";
            b.innerHTML = "X";
            b.onclick = () => b.innerHTML = Math.random() > 0.5 ? "☢" : "☠";
            document.getElementById('grid').appendChild(b);
        }
    }
</script>
</body>
</html>
