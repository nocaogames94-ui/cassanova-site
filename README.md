<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CASSANOVA PROTOCOL</title>
    <style>
        body, html { margin: 0; padding: 0; width: 100%; height: 100%; overflow: hidden; background: #000; font-family: monospace; color: #0f0; }
        canvas { position: fixed; top: 0; left: 0; z-index: 1; opacity: 0.4; }
        #stage { position: relative; z-index: 10; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center; text-align: center; }
        .glitch { font-size: 2rem; text-shadow: 0 0 10px #0f0; text-transform: uppercase; padding: 20px; }
        
        /* MENU NO TOPO: Escapa de qualquer banner ou barra de navegador */
        .nav { position: fixed; top: 20px; left: 20px; z-index: 9999; }
        .bars { cursor: pointer; display: flex; flex-direction: column; gap: 5px; width: 35px; background: rgba(0,0,0,0.7); padding: 8px; border: 1px solid #0f0; border-radius: 4px; }
        .bars span { height: 4px; background: #0f0; width: 100%; box-shadow: 0 0 8px #0f0; }
        .menu { display: none; background: rgba(0,0,0,0.95); border: 1px solid #0f0; padding: 15px; margin-top: 10px; border-radius: 5px; box-shadow: 0 0 20px #0f0; }
        button { display: block; width: 100%; min-width: 160px; background: none; border: 1px solid #0f0; color: #0f0; margin: 10px 0; padding: 12px; cursor: pointer; font-weight: bold; text-transform: uppercase; }
        
        @keyframes house { 0%, 100% { background: #f00; } 50% { background: #800080; } }
        .active-house { animation: house 1.5s infinite; width: 100%; height: 100%; display: flex; justify-content: center; align-items: center; }
    </style>
</head>
<body>
    <canvas id="m"></canvas>
    <div id="stage"><h1 class="glitch">SISTEMA CASSANOVA ONLINE</h1></div>
    <div class="nav">
        <div class="bars" onclick="toggle()"><span></span><span></span><span></span></div>
        <div id="menu" class="menu">
            <button onclick="doH()">PROTOCOLO HOUSE</button>
            <button onclick="doP()">UNDERGROUND PHILO</button>
            <button onclick="doM()">MEMORY HACK</button>
        </div>
    </div>
    <script>
        const c = document.getElementById('m'), ctx = c.getContext('2d'), st = document.getElementById('stage');
        c.width = window.innerWidth; c.height = window.innerHeight;
        const drops = Array(Math.floor(c.width/16)).fill(1);
        function draw() {
            ctx.fillStyle = "rgba(0,0,0,0.05)"; ctx.fillRect(0,0,c.width,c.height);
            ctx.fillStyle = "#0f0"; ctx.font = "16px monospace";
            drops.forEach((y, i) => {
                ctx.fillText(Math.random() > 0.5 ? "0" : "1", i*16, y*16);
                if(y*16 > c.height && Math.random() > 0.975) drops[i] = 0;
                drops[i]++;
            });
        }
        setInterval(draw, 50);
        function toggle() { const m = document.getElementById('menu'); m.style.display = m.style.display === 'block' ? 'none' : 'block'; }
        function doH() {
            toggle(); st.innerHTML = '<div class="active-house"><h1 id="ht" style="color:white; font-size:2.5rem; text-shadow: 2px 2px #000;"></h1></div>';
            setInterval(() => {
                const el = document.getElementById('ht'); if(!el) return;
                const bg = window.getComputedStyle(el.parentElement).backgroundColor;
                el.innerText = bg.includes('255') ? "CASSANOVA" : "NANDEX";
            }, 100);
        }
        function doP() {
            toggle(); const f = ["A REALIDADE É UMA FALHA.", "O CÓDIGO É A ÚNICA VERDADE.", "SISTEMA CORROMPIDO.", "CASSANOVA IS WATCHING."];
            st.innerHTML = `<h2 class="glitch" style="font-size:1.4rem;">${f[Math.floor(Math.random()*f.length)]}</h2>`;
        }
        function doM() {
            toggle(); st.innerHTML = '<div style="display:grid;grid-template-columns:repeat(3,70px);gap:10px" id="g"></div>';
            for(let i=0;i<9;i++){
                const b = document.createElement('div'); b.style="width:70px;height:70px;border:1px solid #0f0;display:flex;align-items:center;justify-content:center;color:#0f0;font-size:1.5rem;background:rgba(0,0,0,0.8)";
                b.innerHTML="?"; b.onclick=()=>b.innerHTML= Math.random() > 0.5 ? "☠" : "☢"; document.getElementById('g').appendChild(b);
            }
        }
    </script>
</body>
</html>
