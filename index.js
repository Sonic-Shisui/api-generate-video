<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>FF Diamond Shop | Boutique Officielle</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
  <style>
    :root{--primary:#00d4ff;--secondary:#0a0b10;--accent:#ffcc00;--card-bg:#161b22;--text:#fff}
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:Poppins,system-ui;background:var(--secondary);color:var(--text);margin:0;overflow-x:hidden;position:relative}
    
    /* Fond animé avec formes fluorescentes */
    .bg-shapes{position:fixed;inset:0;overflow:hidden;z-index:0;pointer-events:none}
    .shape{position:absolute;border-radius:50%;filter:blur(80px);opacity:.15;animation:float 20s infinite ease-in-out}
    .shape1{width:500px;height:500px;background:var(--primary);top:-200px;left:-200px;animation-delay:0s}
    .shape2{width:400px;height:400px;background:var(--accent);bottom:-150px;right:-150px;animation-delay:5s}
    .shape3{width:350px;height:350px;background:#ff00ff;top:50%;left:50%;animation-delay:10s}
    .shape4{width:300px;height:300px;background:#00ff88;top:20%;right:10%;animation-delay:15s}
    
    @keyframes float{
      0%,100%{transform:translate(0,0) scale(1)}
      25%{transform:translate(50px,-50px) scale(1.1)}
      50%{transform:translate(-30px,30px) scale(0.9)}
      75%{transform:translate(40px,20px) scale(1.05)}
    }
    
    /* Particules flottantes */
    .particles{position:fixed;inset:0;z-index:0;pointer-events:none}
    .particle{position:absolute;width:3px;height:3px;background:var(--primary);border-radius:50%;animation:rise 15s infinite linear;opacity:.3}
    
    @keyframes rise{
      0%{transform:translateY(0) translateX(0);opacity:0}
      10%{opacity:.3}
      90%{opacity:.3}
      100%{transform:translateY(-100vh) translateX(50px);opacity:0}
    }
    
    /* Contenu principal */
    .content{position:relative;z-index:1}
    
    header{position:sticky;top:0;z-index:9;background:rgba(15,20,27,.85);border-bottom:1px solid #30363d;backdrop-filter:blur(10px);animation:slideDown .5s ease-out}
    
    @keyframes slideDown{
      from{transform:translateY(-100%);opacity:0}
      to{transform:translateY(0);opacity:1}
    }
    
    .nav{max-width:1100px;margin:auto;padding:15px 20px;display:flex;gap:15px;align-items:center;justify-content:space-between}
    .brand{font-weight:800;font-size:20px;background:linear-gradient(135deg,#00d4ff,#0082ff,#00d4ff);background-size:200% 200%;animation:gradientShift 3s ease infinite;-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    
    @keyframes gradientShift{
      0%,100%{background-position:0% 50%}
      50%{background-position:100% 50%}
    }
    
    .actions{display:flex;gap:10px;align-items:center}
    .btn{background:linear-gradient(45deg,#0082ff,#00d4ff);border:none;color:#fff;padding:10px 18px;border-radius:999px;cursor:pointer;font-weight:600;transition:all .3s;position:relative;overflow:hidden}
    .btn::before{content:'';position:absolute;inset:0;background:linear-gradient(45deg,transparent,rgba(255,255,255,.3),transparent);transform:translateX(-100%);transition:.5s}
    .btn:hover::before{transform:translateX(100%)}
    .btn:hover{transform:scale(1.05) translateY(-2px);box-shadow:0 8px 25px rgba(0,212,255,.5)}
    .btn:active{transform:scale(0.98)}
    .ghost{background:transparent;border:1px solid #30363d}
    .ghost:hover{border-color:var(--primary);background:rgba(0,212,255,.1)}
    
    .container{max-width:1100px;margin:auto;padding:40px 20px}
    .hero{display:grid;grid-template-columns:1.3fr 1fr;gap:30px;align-items:center;animation:fadeInUp 1s ease-out}
    
    @keyframes fadeInUp{
      from{opacity:0;transform:translateY(30px)}
      to{opacity:1;transform:translateY(0)}
    }
    
    .hero h1{font-size:42px;margin:0;background:linear-gradient(135deg,#00d4ff,#0082ff,#00ff88);background-size:200% 200%;animation:gradientShift 4s ease infinite;-webkit-background-clip:text;-webkit-text-fill-color:transparent;text-shadow:0 0 40px rgba(0,212,255,.3)}
    .hero p{animation:fadeInUp 1s ease-out .2s backwards}
    .hero img{animation:floatImage 3s ease-in-out infinite;filter:drop-shadow(0 10px 30px rgba(0,212,255,.4))}
    
    @keyframes floatImage{
      0%,100%{transform:translateY(0px)}
      50%{transform:translateY(-20px)}
    }
    
    .search{display:flex;gap:10px;margin-top:20px;animation:fadeInUp 1s ease-out .4s backwards}
    .search input{flex:1;padding:12px 16px;border-radius:999px;border:1px solid #30363d;background:rgba(15,20,27,.6);color:#fff;backdrop-filter:blur(10px);transition:all .3s}
    .search input:focus{outline:none;border-color:var(--primary);box-shadow:0 0 20px rgba(0,212,255,.3);transform:scale(1.02)}
    
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:25px}
    .card{background:rgba(22,27,34,.8);border-radius:20px;padding:20px;text-align:center;border:1px solid #30363d;transition:all .4s;position:relative;backdrop-filter:blur(10px);animation:fadeInUp 1s ease-out backwards;opacity:0}
    .card:nth-child(1){animation-delay:.1s}
    .card:nth-child(2){animation-delay:.2s}
    .card:nth-child(3){animation-delay:.3s}
    .card:nth-child(4){animation-delay:.4s}
    .card:nth-child(5){animation-delay:.5s}
    .card:nth-child(6){animation-delay:.6s}
    .card:hover{transform:translateY(-12px) scale(1.03);border-color:var(--primary);box-shadow:0 15px 40px rgba(0,212,255,.3),0 0 60px rgba(0,212,255,.2)}
    .card::before{content:'';position:absolute;inset:0;border-radius:20px;background:linear-gradient(135deg,transparent,rgba(0,212,255,.1));opacity:0;transition:.4s}
    .card:hover::before{opacity:1}
    
    .product-img{width:100%;height:170px;object-fit:contain;margin-bottom:10px;filter:drop-shadow(0 5px 15px rgba(0,212,255,.3));transition:all .4s}
    .card:hover .product-img{transform:scale(1.1) rotate(5deg);filter:drop-shadow(0 10px 25px rgba(0,212,255,.5))}
    
    .price{color:var(--accent);font-weight:800;font-size:24px;margin:10px 0;text-shadow:0 0 20px rgba(255,204,0,.5);animation:pulse 2s ease-in-out infinite}
    
    @keyframes pulse{
      0%,100%{transform:scale(1)}
      50%{transform:scale(1.05)}
    }
    
    .badge{position:absolute;top:12px;right:12px;background:var(--accent);color:#000;padding:4px 12px;border-radius:999px;font-size:12px;font-weight:700;animation:bounce 2s ease-in-out infinite;box-shadow:0 0 20px rgba(255,204,0,.6)}
    
    @keyframes bounce{
      0%,100%{transform:translateY(0)}
      50%{transform:translateY(-5px)}
    }
    
    .row{display:flex;gap:10px;justify-content:center}
    .toast{position:fixed;bottom:20px;right:20px;background:linear-gradient(45deg,#0082ff,#00d4ff);color:#fff;padding:14px 18px;border-radius:14px;display:none;font-weight:600;box-shadow:0 5px 20px rgba(0,212,255,.5);animation:slideInRight .4s ease-out;z-index:999}
    
    @keyframes slideInRight{
      from{transform:translateX(400px);opacity:0}
      to{transform:translateX(0);opacity:1}
    }
    
    .modal{position:fixed;inset:0;background:rgba(0,0,0,.85);display:none;align-items:center;justify-content:center;backdrop-filter:blur(10px);z-index:999;animation:fadeIn .3s ease-out}
    
    @keyframes fadeIn{
      from{opacity:0}
      to{opacity:1}
    }
    
    .modal .box{background:rgba(15,20,27,.95);border:2px solid var(--primary);border-radius:18px;padding:30px;width:min(92%,500px);max-height:80vh;overflow-y:auto;animation:scaleIn .4s ease-out;box-shadow:0 20px 60px rgba(0,212,255,.4)}
    
    @keyframes scaleIn{
      from{transform:scale(0.8);opacity:0}
      to{transform:scale(1);opacity:1}
    }
    
    .cart-item{background:rgba(22,27,34,.8);padding:15px;border-radius:12px;margin:10px 0;display:flex;justify-content:space-between;align-items:center;border:1px solid #30363d;transition:all .3s;animation:slideInLeft .3s ease-out backwards}
    .cart-item:nth-child(1){animation-delay:.05s}
    .cart-item:nth-child(2){animation-delay:.1s}
    .cart-item:nth-child(3){animation-delay:.15s}
    .cart-item:nth-child(4){animation-delay:.2s}
    .cart-item:nth-child(5){animation-delay:.25s}
    .cart-item:hover{border-color:var(--primary);transform:translateX(5px);box-shadow:0 5px 20px rgba(0,212,255,.2)}
    
    @keyframes slideInLeft{
      from{transform:translateX(-50px);opacity:0}
      to{transform:translateX(0);opacity:1}
    }
    
    .qty-controls{display:flex;gap:8px;align-items:center}
    .qty-btn{background:var(--primary);border:none;color:#000;width:30px;height:30px;border-radius:50%;cursor:pointer;font-weight:800;font-size:16px;transition:all .2s}
    .qty-btn:hover{transform:scale(1.2) rotate(90deg);box-shadow:0 0 15px var(--primary)}
    .qty-btn:active{transform:scale(0.9)}
    
    .remove-btn{background:#ff4444;color:#fff;border:none;padding:6px 12px;border-radius:8px;cursor:pointer;font-size:12px;transition:all .3s}
    .remove-btn:hover{background:#cc0000;transform:scale(1.1)}
    
    .total-box{background:linear-gradient(135deg,#0082ff,#00d4ff,#00ff88);background-size:200% 200%;animation:gradientShift 3s ease infinite;padding:20px;border-radius:12px;margin:20px 0;text-align:center;box-shadow:0 10px 30px rgba(0,212,255,.4)}
    .total-box h3{margin:0;font-size:28px;color:#fff;text-shadow:0 2px 10px rgba(0,0,0,.5);animation:pulse 2s ease-in-out infinite}
    
    .empty-cart{text-align:center;padding:40px;opacity:.6;animation:fadeIn 1s ease-out}
    footer{opacity:.6;text-align:center;padding:40px;animation:fadeInUp 1s ease-out 1s backwards}
    details{background:rgba(22,27,34,.8);padding:15px;border-radius:12px;margin:10px 0;border:1px solid #30363d;cursor:pointer;transition:all .3s;backdrop-filter:blur(10px)}
    details:hover{border-color:var(--primary);box-shadow:0 5px 20px rgba(0,212,255,.2)}
    summary{font-weight:600;cursor:pointer;transition:.3s}
    details[open] summary{color:var(--primary)}
    
    .cart-badge{background:#ff4444;color:#fff;border-radius:50%;width:22px;height:22px;display:inline-flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;position:relative;top:-2px;animation:ping 1s ease-in-out infinite}
    
    @keyframes ping{
      0%{box-shadow:0 0 0 0 rgba(255,68,68,.7)}
      70%{box-shadow:0 0 0 10px rgba(255,68,68,0)}
      100%{box-shadow:0 0 0 0 rgba(255,68,68,0)}
    }
    
    /* Effet de brillance sur les titres */
    h2{background:linear-gradient(135deg,#fff,#00d4ff,#fff);background-size:200% 200%;animation:gradientShift 3s ease infinite;-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    
    /* Scrollbar personnalisée */
    ::-webkit-scrollbar{width:10px}
    ::-webkit-scrollbar-track{background:var(--secondary)}
    ::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#0082ff,#00d4ff);border-radius:10px}
    ::-webkit-scrollbar-thumb:hover{background:linear-gradient(180deg,#00d4ff,#00ff88)}
    
    @media(max-width:768px){
      .hero{grid-template-columns:1fr}
      .hero img{max-width:200px;margin:auto}
      .hero h1{font-size:32px}
    }
  </style>
</head>
<body>
<!-- Fond animé avec formes fluorescentes -->
<div class="bg-shapes">
  <div class="shape shape1"></div>
  <div class="shape shape2"></div>
  <div class="shape shape3"></div>
  <div class="shape shape4"></div>
</div>

<!-- Particules flottantes -->
<div class="particles" id="particles"></div>

<!-- Contenu principal -->
<div class="content">
<header>
  <div class="nav">
    <div class="brand">💎 FF DIAMOND SHOP</div>
    <div class="actions">
      <button class="btn" onclick="openModal()">🛒 Panier <span id="cartCount" class="cart-badge" style="display:none">0</span></button>
    </div>
  </div>
</header>

<section class="container hero">
  <div>
    <h1>Diamants Free Fire au meilleur prix</h1>
    <p>Livraison rapide par ID Player • Paiement <b>Mobile Money uniquement</b></p>
    <div class="search">
      <input id="q" placeholder="Rechercher un pack…" oninput="filterCards()">
      <button class="btn" onclick="filterCards()">🔍 Rechercher</button>
    </div>
  </div>
  <img src="https://i.imgur.com/6oK7Z8F.png" alt="FF" />
</section>

<main class="container">
  <div class="grid" id="grid">
    <div class="card" data-name="110 diamants">
      <span class="badge">PROMO</span>
      <img class="product-img" src="https://i.imgur.com/9nKXN5L.png" alt="110 Diamants">
      <h3>100 + 10 Diamants</h3>
      <p class="price">650 FCFA</p>
      <button class="btn" onclick="addToCart('100 + 10 Diamants', 650)" style="width:100%">➕ Ajouter au panier</button>
    </div>
    
    <div class="card" data-name="343 diamants">
      <img class="product-img" src="https://i.imgur.com/9nKXN5L.png" alt="343 Diamants">
      <h3>310 + 33 Diamants</h3>
      <p class="price">2000 FCFA</p>
      <button class="btn" onclick="addToCart('310 + 33 Diamants', 2000)" style="width:100%">➕ Ajouter au panier</button>
    </div>
    
    <div class="card" data-name="572 diamants">
      <img class="product-img" src="https://i.imgur.com/9nKXN5L.png" alt="572 Diamants">
      <h3>520 + 52 Diamants</h3>
      <p class="price">3300 FCFA</p>
      <button class="btn" onclick="addToCart('520 + 52 Diamants', 3300)" style="width:100%">➕ Ajouter au panier</button>
    </div>
    
    <div class="card" data-name="1166 diamants">
      <span class="badge">TOP VENTE</span>
      <img class="product-img" src="https://i.imgur.com/9nKXN5L.png" alt="1166 Diamants">
      <h3>1060 + 106 Diamants</h3>
      <p class="price">6500 FCFA</p>
      <button class="btn" onclick="addToCart('1060 + 106 Diamants', 6500)" style="width:100%">➕ Ajouter au panier</button>
    </div>

    <div class="card" data-name="2200 diamants">
      <img class="product-img" src="https://i.imgur.com/9nKXN5L.png" alt="2200 Diamants">
      <h3>2000 + 200 Diamants</h3>
      <p class="price">13000 FCFA</p>
      <button class="btn" onclick="addToCart('2000 + 200 Diamants', 13000)" style="width:100%">➕ Ajouter au panier</button>
    </div>

    <div class="card" data-name="5600 diamants">
      <span class="badge">BEST VALUE</span>
      <img class="product-img" src="https://i.imgur.com/9nKXN5L.png" alt="5600 Diamants">
      <h3>5000 + 600 Diamants</h3>
      <p class="price">32500 FCFA</p>
      <button class="btn" onclick="addToCart('5000 + 600 Diamants', 32500)" style="width:100%">➕ Ajouter au panier</button>
    </div>
  </div>
</main>

<section class="container">
  <h2>💳 Moyens de paiement</h2>
  <p>✅ <b>Mobile Money (MTN & Orange Money)</b> uniquement — aucun autre moyen accepté.</p>
</section>

<section class="container">
  <h2>⭐ Témoignages</h2>
  <p>⭐⭐⭐⭐⭐ « Livraison en 2 minutes, sérieux ! » — Kevin</p>
  <p>⭐⭐⭐⭐⭐ « Paiement Orange Money accepté, parfait. » — Sarah</p>
  <p>⭐⭐⭐⭐⭐ « Service rapide et fiable, je recommande ! » — Michel</p>
</section>

<section class="container">
  <h2>❓ FAQ</h2>
  <details>
    <summary>Comment payer ?</summary>
    <p>Après la commande WhatsApp, nous t'envoyons le numéro Mobile Money (MTN ou Orange).</p>
  </details>
  <details>
    <summary>Délai de livraison ?</summary>
    <p>Instantanée après confirmation du paiement (2-5 minutes max).</p>
  </details>
  <details>
    <summary>Besoin de quoi pour commander ?</summary>
    <p>Ton ID Player Free Fire uniquement. Tu le trouves dans les paramètres du jeu.</p>
  </details>
</section>

<footer>&copy; 2026 Diamond Shop FF — Paiement Mobile Money uniquement</footer>
</div>

<div class="toast" id="toast">✅ Ajouté au panier</div>

<div class="modal" id="modal">
  <div class="box">
    <h2 style="margin-top:0">🛒 Votre Panier</h2>
    <div id="cart"></div>
    <div class="total-box" id="totalBox" style="display:none">
      <h3 id="total">Total: 0 FCFA</h3>
    </div>
    <div style="display:flex;gap:10px;margin-top:20px">
      <button class="btn" onclick="checkout()" style="flex:1">📱 Commander via WhatsApp</button>
      <button class="btn ghost" onclick="closeModal()">Fermer</button>
    </div>
  </div>
</div>

<script>
let cart = {};

// Génération des particules
function createParticles() {
  const container = document.getElementById('particles');
  for(let i = 0; i < 30; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 15 + 's';
    particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
    container.appendChild(particle);
  }
}
createParticles();

function addToCart(name, price) {
  if (cart[name]) {
    cart[name].qty++;
  } else {
    cart[name] = { price, qty: 1 };
  }
  updateCartDisplay();
  showToast('✅ ' + name + ' ajouté au panier');
}

function removeFromCart(name) {
  delete cart[name];
  updateCartDisplay();
  showToast('🗑️ Article retiré du panier');
}

function updateQty(name, delta) {
  if (cart[name]) {
    cart[name].qty += delta;
    if (cart[name].qty <= 0) {
      removeFromCart(name);
    } else {
      updateCartDisplay();
    }
  }
}

function updateCartDisplay() {
  const cartEl = document.getElementById('cart');
  const totalBox = document.getElementById('totalBox');
  const cartCount = document.getElementById('cartCount');
  
  const items = Object.keys(cart);
  const totalItems = items.reduce((sum, key) => sum + cart[key].qty, 0);
  
  if (items.length === 0) {
    cartEl.innerHTML = '<div class="empty-cart">🛒 Votre panier est vide</div>';
    totalBox.style.display = 'none';
    cartCount.style.display = 'none';
  } else {
    cartEl.innerHTML = items.map(name => `
      <div class="cart-item">
        <div>
          <strong>${name}</strong><br>
          <small>${cart[name].price} FCFA × ${cart[name].qty}</small>
        </div>
        <div style="display:flex;gap:10px;align-items:center">
          <div class="qty-controls">
            <button class="qty-btn" onclick="updateQty('${name}', -1)">−</button>
            <span style="font-weight:700;min-width:25px;text-align:center">${cart[name].qty}</span>
            <button class="qty-btn" onclick="updateQty('${name}', 1)">+</button>
          </div>
          <button class="remove-btn" onclick="removeFromCart('${name}')">🗑️</button>
        </div>
      </div>
    `).join('');
    
    const total = items.reduce((sum, name) => sum + (cart[name].price * cart[name].qty), 0);
    document.getElementById('total').textContent = `Total: ${total.toLocaleString()} FCFA`;
    totalBox.style.display = 'block';
    
    cartCount.textContent = totalItems;
    cartCount.style.display = 'inline-flex';
  }
}

function openModal() {
  document.getElementById('modal').style.display = 'flex';
  updateCartDisplay();
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function checkout() {
  const items = Object.keys(cart);
  if (items.length === 0) {
    showToast('⚠️ Votre panier est vide');
    return;
  }
  
  let message = 'Bonjour, je veux commander:\n\n';
  items.forEach(name => {
    message += `• ${name} x${cart[name].qty} = ${(cart[name].price * cart[name].qty).toLocaleString()} FCFA\n`;
  });
  
  const total = items.reduce((sum, name) => sum + (cart[name].price * cart[name].qty), 0);
  message += `\n💰 Total: ${total.toLocaleString()} FCFA\n`;
  message += `💳 Paiement: Mobile Money`;
  
  const url = 'https://wa.me/237681246628?text=' + encodeURIComponent(message);
  window.open(url, '_blank');
}

function filterCards() {
  const query = document.getElementById('q').value.toLowerCase();
  document.querySelectorAll('.card').forEach(card => {
    const name = card.dataset.name.toLowerCase();
    card.style.display = name.includes(query) ? 'block' : 'none';
  });
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.style.display = 'block';
  setTimeout(() => toast.style.display = 'none', 2000);
}

// Fermer la modal en cliquant à l'extérieur
document.getElementById('modal').addEventListener('click', (e) => {
  if (e.target.id === 'modal') closeModal();
});
</script>
</body>
</html>