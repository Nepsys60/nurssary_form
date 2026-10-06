/**
 * Kinnau Suppliers - Organic E-Commerce Storefront
 * Interactive Logic & Shopping Cart Management
 */

// Product Catalog matching Stitch Design Specification
const PRODUCTS = [
  {
    id: 'cow-dung-25kg',
    title: 'Premium Cow Dung Compost',
    nepaliTitle: 'गोबर मल (कम्पोस्ट)',
    category: 'fertilizers',
    weight: '25 KG Sack',
    price: 500,
    originalPrice: 650,
    rating: 4.9,
    reviewsCount: 142,
    badge: 'Bestseller',
    badgeType: 'badge-green',
    image: 'assets/images/cow-dung-compost.jpg',
    summary: 'Aged, weed-seed-free, 100% natural organic compost produced at Tokha factory.',
    features: [
      'Enriches soil humus & natural fertility',
      'Enhances rooftop pot moisture retention by +40%',
      'Cured & aged for 120 days — zero odor, weed-seed free',
      'Delivery available from 1 sack to any sacks'
    ],
    npk: 'N: 1.8% | P: 1.2% | K: 1.5%',
    organicCarbon: '18 - 24%',
    ph: '6.8 - 7.2 (Neutral)'
  },
  {
    id: 'combo-pack-ultimate',
    title: 'The Ultimate Plant Health Combo Pack',
    nepaliTitle: 'सम्पूर्ण बिरुवा स्वास्थ्य कम्बो प्याक',
    category: 'combos',
    weight: 'All-in-One 5-Piece Bundle',
    price: 1499,
    originalPrice: 1899,
    rating: 5.0,
    reviewsCount: 320,
    badge: '🔥 Free Valley Delivery',
    badgeType: 'badge-amber',
    isFeatured: true,
    image: 'assets/images/combo-pack.jpg',
    summary: 'Everything your home garden or rooftop plants need for robust growth, vibrant blooming, and pest immunity.',
    features: [
      'Vermi Compost (20 KG heavy-duty sack)',
      'Cocopeat Block (400-650g compressed brick, yields 9L)',
      'Mustard Cake Pina (1 KG natural bio-nitrogen amendment)',
      'Steamed Bone Meal (1 KG organic bloom & fruit booster)',
      'Pure Neem Khali (800g-1 KG subterranean pest protector)'
    ],
    npk: 'Complete Balanced Macro & Micro Nutrition',
    organicCarbon: 'High Humic Content',
    ph: 'Optimal 6.5 - 7.0'
  },
  {
    id: 'vermicompost-5kg',
    title: 'Pure Vermicompost (Worm Castings)',
    nepaliTitle: 'भर्मी कम्पोस्ट (गड्यौला मल)',
    category: 'fertilizers',
    weight: '5 KG Retail Pack',
    price: 250,
    originalPrice: 300,
    rating: 4.9,
    reviewsCount: 98,
    badge: 'Microbial Gold',
    badgeType: 'badge-green',
    image: 'assets/images/vermicompost.svg',
    summary: 'High-density organic worm castings teeming with live beneficial soil microbes and enzymes.',
    features: [
      'Pure Eisenia fetida earthworm castings',
      '5x richer in available nitrogen than regular soil',
      'Instant root nutrient release without root-burn risk',
      'Bulk available (Rs. 50/kg for sacks > 20kg)'
    ],
    npk: 'N: 2.2% | P: 1.6% | K: 1.8%',
    organicCarbon: '22%',
    ph: '6.8'
  },
  {
    id: 'neem-khali-1kg',
    title: 'Neem Khali & Organic Soil Booster',
    nepaliTitle: 'शुद्ध नीमको पिना',
    category: 'amendments',
    weight: '1 KG Bio-Pouch',
    price: 180,
    originalPrice: 220,
    rating: 4.8,
    reviewsCount: 76,
    badge: 'Root Shield',
    badgeType: 'badge-amber',
    image: 'assets/images/neem-khali.svg',
    summary: 'Natural nematicide cake that eliminates subterranean termites, white grubs, and root maggots.',
    features: [
      'Extracted from high-grade Azadirachta indica neem seeds',
      'Protects root system from subterranean insects & nematodes',
      'Slows nitrification for sustained nitrogen absorption',
      '100% biodegradable and child/pet safe'
    ],
    npk: 'N: 3.5% | P: 1.0% | K: 1.5%',
    organicCarbon: 'Azadirachtin > 1000 ppm',
    ph: '6.0 - 6.5'
  },
  {
    id: 'cocopeat-650g',
    title: 'Horticultural Cocopeat Block',
    nepaliTitle: 'कोकोपिट ब्लक',
    category: 'amendments',
    weight: '650g Compressed Brick',
    price: 140,
    originalPrice: 180,
    rating: 4.8,
    reviewsCount: 65,
    badge: 'Water Saver',
    badgeType: 'badge-brown',
    image: 'assets/images/cocopeat.svg',
    summary: 'Premium washed low-EC coir pith that expands up to 8x into 9 litres of fluffy potting medium.',
    features: [
      'Triple-washed with fresh mountain water (Low EC < 0.5 mS/cm)',
      'Retains up to 9 times its weight in water',
      'Lightens rooftop pots to reduce building slab load',
      'Ideal seed germination and seedling tray mix'
    ],
    npk: 'Natural Organic Medium',
    organicCarbon: 'High Lignin & Cellulose',
    ph: '5.8 - 6.5'
  },
  {
    id: 'bone-meal-1kg',
    title: 'Steamed Bone Meal Fertilizer',
    nepaliTitle: 'स्टिम्ड बोन मिल मल',
    category: 'fertilizers',
    weight: '1 KG Pack',
    price: 160,
    originalPrice: 200,
    rating: 4.9,
    reviewsCount: 84,
    badge: 'Bloom Booster',
    badgeType: 'badge-amber',
    image: 'assets/images/bone-meal.svg',
    summary: 'Fine organic steamed bone meal powder packed with natural slow-release phosphorus and calcium.',
    features: [
      '22% natural phosphorus for heavy flowering and root branching',
      '30% organic calcium prevents blossom end rot in tomatoes',
      'Essential for roses, fruit trees, and flowering ornamentals',
      'Sterilized steam process — clean, pathogen-free'
    ],
    npk: 'P: 22% | Ca: 30% | N: 3%',
    organicCarbon: 'Natural Bone Matrix',
    ph: 'Neutral'
  }
];

// Shopping Cart State
let cart = [];

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  renderProducts('all');
  initFilterTabs();
  initCartDrawer();
  initFaqAccordion();
  initMobileMenu();
  initHeaderScroll();
  updateCartUI();
});

// Load Cart from localStorage
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('kinnau_cart');
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load cart', e);
    cart = [];
  }
}

// Save Cart
function saveCartToStorage() {
  try {
    localStorage.setItem('kinnau_cart', JSON.stringify(cart));
  } catch (e) {
    console.error('Failed to save cart', e);
  }
}

// Render Products Grid
function renderProducts(category) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = category === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === category);

  grid.innerHTML = filtered.map(product => {
    if (product.isFeatured) {
      // 2-column featured layout
      return `
        <article class="product-card featured-bundle" data-id="${product.id}">
          <div class="product-card-top">
            <img src="${product.image}" alt="${product.title}" class="product-card-img" loading="lazy">
            <div class="card-badges">
              <span class="badge ${product.badgeType}">${product.badge}</span>
              <span class="weight-badge">${product.weight}</span>
            </div>
          </div>
          <div class="product-card-body">
            <div class="product-category-tag">HIGH-CONVERSION COMBO · SPECIAL VALUE</div>
            <h3 class="product-title">${product.title}</h3>
            <p class="product-specs-summary">${product.summary}</p>
            
            <ul class="product-bullet-list">
              ${product.features.map(f => `
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>${f}</span>
                </li>
              `).join('')}
            </ul>

            <div class="product-price-block">
              <span class="price-current">Rs. ${product.price.toLocaleString()}</span>
              <span class="price-original">Rs. ${product.originalPrice.toLocaleString()}</span>
              <span class="price-save-badge">SAVE Rs. ${(product.originalPrice - product.price).toLocaleString()}</span>
            </div>

            <div class="product-card-actions">
              <div class="card-action-row">
                <div class="stepper" id="stepper-${product.id}">
                  <button class="stepper-btn" onclick="adjustCardQuantity('${product.id}', -1)" aria-label="Decrease quantity">−</button>
                  <input type="text" class="stepper-input" id="qty-${product.id}" value="1" readonly>
                  <button class="stepper-btn" onclick="adjustCardQuantity('${product.id}', 1)" aria-label="Increase quantity">+</button>
                </div>
                <button class="btn btn-primary" style="flex: 1;" onclick="addToCartFromCard('${product.id}')">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                  </svg>
                  Add to Cart
                </button>
              </div>
              <button class="btn btn-whatsapp" onclick="orderProductWhatsApp('${product.id}')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/>
                </svg>
                Instant Order on WhatsApp
              </button>
              <button class="quick-view-btn" onclick="openQuickView('${product.id}')">View Detailed Lab & Nutrition Specs →</button>
            </div>
          </div>
        </article>
      `;
    }

    // Standard card layout
    return `
      <article class="product-card" data-id="${product.id}">
        <div class="product-card-top">
          <img src="${product.image}" alt="${product.title}" class="product-card-img" loading="lazy">
          <div class="card-badges">
            <span class="badge ${product.badgeType}">${product.badge}</span>
            <span class="weight-badge">${product.weight}</span>
          </div>
        </div>
        <div class="product-card-body">
          <div class="product-category-tag">${product.category.toUpperCase()}</div>
          <h3 class="product-title">${product.title}</h3>
          <p class="product-specs-summary">${product.summary}</p>

          <ul class="product-bullet-list">
            ${product.features.slice(0, 3).map(f => `
              <li>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>

          <div class="product-price-block">
            <span class="price-current">Rs. ${product.price.toLocaleString()}</span>
            ${product.originalPrice ? `<span class="price-original">Rs. ${product.originalPrice.toLocaleString()}</span>` : ''}
          </div>

          <div class="product-card-actions">
            <div class="card-action-row">
              <div class="stepper" id="stepper-${product.id}">
                <button class="stepper-btn" onclick="adjustCardQuantity('${product.id}', -1)" aria-label="Decrease quantity">−</button>
                <input type="text" class="stepper-input" id="qty-${product.id}" value="1" readonly>
                <button class="stepper-btn" onclick="adjustCardQuantity('${product.id}', 1)" aria-label="Increase quantity">+</button>
              </div>
              <button class="btn btn-primary" style="flex: 1;" onclick="addToCartFromCard('${product.id}')">
                Add to Cart
              </button>
            </div>
            <button class="btn btn-whatsapp btn-sm" onclick="orderProductWhatsApp('${product.id}')">
              WhatsApp Order
            </button>
            <button class="quick-view-btn" onclick="openQuickView('${product.id}')">Nutrient Specs →</button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Filter Tabs
function initFilterTabs() {
  const buttons = document.querySelectorAll('.filter-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const cat = btn.getAttribute('data-category');
      renderProducts(cat);
    });
  });
}

// Stepper adjustment on cards
function adjustCardQuantity(productId, delta) {
  const input = document.getElementById(`qty-${productId}`);
  if (!input) return;
  let val = parseInt(input.value, 10) || 1;
  val = Math.max(1, Math.min(99, val + delta));
  input.value = val;
}

// Add to Cart from Card
function addToCartFromCard(productId) {
  const input = document.getElementById(`qty-${productId}`);
  const qty = input ? parseInt(input.value, 10) || 1 : 1;
  addToCart(productId, qty);
}

// Generic Add to Cart
function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existingIndex = cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      weight: product.weight,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`Added ${quantity}x ${product.title} to your cart`);

  // Reset card quantity to 1
  const input = document.getElementById(`qty-${productId}`);
  if (input) input.value = 1;
}

// Remove from Cart
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  saveCartToStorage();
  updateCartUI();
}

// Update Cart Quantity
function updateCartItemQuantity(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    removeFromCart(productId);
  } else {
    saveCartToStorage();
    updateCartUI();
  }
}

// Update Cart UI Elements
function updateCartUI() {
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // Free delivery logic: free if subtotal >= 1000 or combo included, else Rs. 100 in Valley
  const hasCombo = cart.some(i => i.id === 'combo-pack-ultimate');
  const deliveryFee = (subtotal >= 1000 || hasCombo || cart.length === 0) ? 0 : 100;
  const total = subtotal + deliveryFee;

  // Header badges
  const badges = document.querySelectorAll('.cart-badge');
  badges.forEach(b => {
    b.textContent = totalCount;
    b.style.display = totalCount > 0 ? 'flex' : 'none';
  });

  // Drawer list
  const cartList = document.getElementById('cart-items-list');
  const emptyMsg = document.getElementById('empty-cart-msg');
  const drawerFooter = document.getElementById('drawer-footer');

  if (cartList && emptyMsg && drawerFooter) {
    if (cart.length === 0) {
      emptyMsg.style.display = 'block';
      cartList.innerHTML = '';
      drawerFooter.style.display = 'none';
    } else {
      emptyMsg.style.display = 'none';
      drawerFooter.style.display = 'block';

      cartList.innerHTML = cart.map(item => `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.title}" class="cart-item-img">
          <div class="cart-item-info">
            <h4 class="cart-item-title">${item.title}</h4>
            <span class="cart-item-pack">${item.weight}</span>
            <span class="cart-item-price">Rs. ${(item.price * item.quantity).toLocaleString()}</span>
            <div class="stepper" style="margin-top: 6px; width: fit-content;">
              <button class="stepper-btn" style="width: 28px; height: 28px; font-size: 14px;" onclick="updateCartItemQuantity('${item.id}', -1)">−</button>
              <span style="font-family: var(--font-headline); font-weight: 700; font-size: 13px; width: 30px; text-align: center;">${item.quantity}</span>
              <button class="stepper-btn" style="width: 28px; height: 28px; font-size: 14px;" onclick="updateCartItemQuantity('${item.id}', 1)">+</button>
            </div>
          </div>
          <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Remove item">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      `).join('');

      // Subtotal & Delivery labels
      const subtotalEl = document.getElementById('cart-subtotal');
      const deliveryEl = document.getElementById('cart-delivery');
      const totalEl = document.getElementById('cart-total');
      const deliveryBanner = document.getElementById('cart-delivery-banner');

      if (subtotalEl) subtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
      if (deliveryEl) deliveryEl.textContent = deliveryFee === 0 ? 'FREE' : `Rs. ${deliveryFee}`;
      if (totalEl) totalEl.textContent = `Rs. ${total.toLocaleString()}`;

      if (deliveryBanner) {
        if (deliveryFee === 0) {
          deliveryBanner.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            <span><strong>Valley Free Delivery Unlocked!</strong> Tokha factory direct shipping.</span>
          `;
          deliveryBanner.style.backgroundColor = '#e8f5e9';
          deliveryBanner.style.color = '#1b5e20';
        } else {
          deliveryBanner.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            <span>Add Rs. ${(1000 - subtotal).toLocaleString()} more for <strong>FREE Kathmandu Valley Delivery</strong>.</span>
          `;
          deliveryBanner.style.backgroundColor = '#fff8e1';
          deliveryBanner.style.color = '#b78103';
        }
      }
    }
  }
}

// Open/Close Cart Drawer
function initCartDrawer() {
  const toggleBtn = document.getElementById('cart-toggle-btn');
  const closeBtn = document.getElementById('drawer-close-btn');
  const backdrop = document.getElementById('drawer-backdrop');
  const drawer = document.getElementById('cart-drawer');

  if (toggleBtn && drawer && backdrop) {
    toggleBtn.addEventListener('click', () => {
      drawer.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  function closeDrawer() {
    if (drawer && backdrop) {
      drawer.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);
}

// Complete Order via WhatsApp from Cart
function checkoutWhatsApp() {
  if (cart.length === 0) return;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const hasCombo = cart.some(i => i.id === 'combo-pack-ultimate');
  const deliveryFee = (subtotal >= 1000 || hasCombo) ? 0 : 100;
  const total = subtotal + deliveryFee;

  let msg = `🌿 *NEW ORDER - KINNAU SUPPLIERS STOREFRONT*\n`;
  msg += `--------------------------------------\n`;
  cart.forEach((item, idx) => {
    msg += `${idx + 1}. *${item.title}* (${item.weight})\n`;
    msg += `   Qty: ${item.quantity} x Rs. ${item.price} = Rs. ${item.price * item.quantity}\n`;
  });
  msg += `--------------------------------------\n`;
  msg += `*Subtotal:* Rs. ${subtotal.toLocaleString()}\n`;
  msg += `*Valley Delivery:* ${deliveryFee === 0 ? 'FREE' : 'Rs. ' + deliveryFee}\n`;
  msg += `*Total Payable:* Rs. ${total.toLocaleString()}\n\n`;
  msg += `📍 *Delivery Details:*\n`;
  msg += `Name: [Your Name]\n`;
  msg += `Address/Area: [e.g. Tokha, Baluwatar, Jhamsikhel, Baneshwor]\n`;
  msg += `Contact Phone: [Your Mobile]\n`;
  msg += `Payment: Cash on Delivery / eSewa\n`;
  msg += `--------------------------------------\n`;
  msg += `Please confirm availability and dispatch schedule. Thank you!`;

  const phone = '9779851167274';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// Direct single product WhatsApp order
function orderProductWhatsApp(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const input = document.getElementById(`qty-${productId}`);
  const qty = input ? parseInt(input.value, 10) || 1 : 1;

  let msg = `🌿 *Namaste Kinnau Suppliers!*\n\n`;
  msg += `I would like to place an order for:\n`;
  msg += `• *Product:* ${product.title}\n`;
  msg += `• *Size:* ${product.weight}\n`;
  msg += `• *Quantity:* ${qty}\n`;
  msg += `• *Price:* Rs. ${(product.price * qty).toLocaleString()}\n\n`;
  msg += `Please let me know your delivery timing within Kathmandu Valley.`;

  const phone = '9779851167274';
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// Open Quick View Modal
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalContainer = document.getElementById('modal-container');

  if (!modalBackdrop || !modalContainer) return;

  modalContainer.innerHTML = `
    <button class="modal-close-btn" onclick="closeModal()" aria-label="Close modal">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; padding: 28px;">
      <div style="background-color: #f4f6f0; border-radius: var(--rounded-lg); overflow: hidden; display: flex; align-items: center; justify-content: center; min-height: 280px;">
        <img src="${product.image}" alt="${product.title}" style="max-height: 280px; width: 100%; object-fit: contain;">
      </div>
      <div style="display: flex; flex-direction: column;">
        <span class="badge ${product.badgeType}" style="width: fit-content; margin-bottom: 8px;">${product.badge}</span>
        <h3 style="font-family: var(--font-headline); font-size: 22px; font-weight: 800; color: var(--color-on-surface); line-height: 1.25; margin-bottom: 4px;">${product.title}</h3>
        <p style="font-size: 13px; color: var(--color-primary); font-weight: 600; margin-bottom: 12px;">${product.nepaliTitle} · ${product.weight}</p>
        <p style="font-size: 14px; color: var(--color-on-surface-variant); margin-bottom: 16px; line-height: 1.5;">${product.summary}</p>
        
        <div style="background-color: var(--color-surface-container-low); padding: 14px; border-radius: var(--rounded-md); margin-bottom: 16px;">
          <h4 style="font-family: var(--font-headline); font-size: 13px; font-weight: 700; color: var(--color-primary); margin-bottom: 8px; text-transform: uppercase;">Lab & Agronomic Profile</h4>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; font-size: 12px;">
            <div><strong>NPK Ratio:</strong> ${product.npk}</div>
            <div><strong>Organic Carbon:</strong> ${product.organicCarbon}</div>
            <div><strong>Soil pH:</strong> ${product.ph}</div>
            <div><strong>Tested At:</strong> Tokha Agri Lab</div>
          </div>
        </div>

        <div class="product-price-block" style="margin-bottom: 16px;">
          <span class="price-current">Rs. ${product.price.toLocaleString()}</span>
          ${product.originalPrice ? `<span class="price-original">Rs. ${product.originalPrice.toLocaleString()}</span>` : ''}
        </div>

        <div style="display: flex; gap: 10px; margin-top: auto;">
          <button class="btn btn-primary" style="flex: 1;" onclick="addToCart('${product.id}', 1); closeModal();">
            Add to Cart
          </button>
          <button class="btn btn-whatsapp" onclick="orderProductWhatsApp('${product.id}')">
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  `;

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modalBackdrop = document.getElementById('modal-backdrop');
  if (modalBackdrop) {
    modalBackdrop.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Annual Package Inquiry
function openPackageInquiry(packageName, price) {
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalContainer = document.getElementById('modal-container');
  if (!modalBackdrop || !modalContainer) return;

  modalContainer.innerHTML = `
    <button class="modal-close-btn" onclick="closeModal()" aria-label="Close modal">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>
    <div style="padding: 32px;">
      <span class="badge badge-green" style="margin-bottom: 8px;">तपाईंको हरियाली, हाम्रो जिम्मेवारी</span>
      <h3 style="font-family: var(--font-headline); font-size: 24px; font-weight: 800; color: var(--color-on-surface); margin-bottom: 6px;">
        Subscribe: ${packageName}
      </h3>
      <p style="font-size: 14px; color: var(--color-on-surface-variant); margin-bottom: 20px;">
        Fee: <strong>${price}</strong>. Our certified agronomist and horticulturist team will visit your premises for on-site inspection, fertilization, and preventative plant care.
      </p>

      <form onsubmit="handleCareFormSubmit(event, '${packageName}')" style="display: flex; flex-direction: column; gap: 14px;">
        <div>
          <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 4px;">Full Name / Organization</label>
          <input type="text" id="care-name" required placeholder="e.g. Ramesh Shrestha" style="width: 100%; padding: 10px 14px; border: 1.5px solid var(--color-border-card); border-radius: var(--rounded-default); outline: none;">
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
          <div>
            <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 4px;">Phone / Mobile</label>
            <input type="tel" id="care-phone" required placeholder="98XXXXXXXX" style="width: 100%; padding: 10px 14px; border: 1.5px solid var(--color-border-card); border-radius: var(--rounded-default); outline: none;">
          </div>
          <div>
            <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 4px;">Location in Valley</label>
            <select id="care-location" style="width: 100%; padding: 10px 14px; border: 1.5px solid var(--color-border-card); border-radius: var(--rounded-default); outline: none;">
              <option>Kathmandu (Inside Ring Road)</option>
              <option>Kathmandu (Outside Ring Road / Tokha / Budhanilkantha)</option>
              <option>Lalitpur (Jhamsikhel / Kupondole / Patan)</option>
              <option>Bhaktapur (Sallaghari / Thimi)</option>
            </select>
          </div>
        </div>
        <div>
          <label style="display: block; font-size: 13px; font-weight: 600; margin-bottom: 4px;">Number of Pots / Garden Area</label>
          <input type="text" id="care-pots" placeholder="e.g. 25 Balcony Pots & 4 Citrus Trees" style="width: 100%; padding: 10px 14px; border: 1.5px solid var(--color-border-card); border-radius: var(--rounded-default); outline: none;">
        </div>
        <button type="submit" class="btn btn-whatsapp btn-lg" style="margin-top: 10px;">
          Send Consultation Request via WhatsApp
        </button>
      </form>
    </div>
  `;

  modalBackdrop.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function handleCareFormSubmit(e, packageName) {
  e.preventDefault();
  const name = document.getElementById('care-name').value;
  const phone = document.getElementById('care-phone').value;
  const loc = document.getElementById('care-location').value;
  const pots = document.getElementById('care-pots').value;

  let msg = `🌿 *ANNUAL PLANT CARE INQUIRY*\n`;
  msg += `Package: *${packageName}*\n`;
  msg += `Client Name: ${name}\n`;
  msg += `Phone: ${phone}\n`;
  msg += `Location: ${loc}\n`;
  msg += `Estimated Pots/Area: ${pots}\n\n`;
  msg += `Please contact me to schedule the initial garden health checkup.`;

  closeModal();
  const waUrl = `https://wa.me/9779851167274?text=${encodeURIComponent(msg)}`;
  window.open(waUrl, '_blank');
}

// FAQ Accordion
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');
        items.forEach(i => i.classList.remove('active'));
        if (!isActive) item.classList.add('active');
      });
    }
  });
}

// Mobile Menu
function initMobileMenu() {
  const btn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  if (btn && drawer) {
    btn.addEventListener('click', () => {
      drawer.classList.toggle('active');
    });
  }
}

// Sticky Header Scroll
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// Toast notification helper
function showToast(message) {
  let toast = document.getElementById('toast-notification');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-notification';
    toast.className = 'toast-notification';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#a3f69c" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
    <span>${message}</span>
  `;
  toast.classList.add('active');

  setTimeout(() => {
    toast.classList.remove('active');
  }, 2800);
}
