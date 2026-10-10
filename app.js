/**
 * Kinnau Suppliers — Tokha, Kathmandu
 * Authentic Organic Agri-Retail Storefront Logic
 */

import comboPackImg from './assets/images/combo-pack.jpg';
import cowDungImg from './assets/images/cow-dung-compost.jpg';
import vermiImg from './assets/images/vermicompost.jpg';
import neemImg from './assets/images/neem-khali.jpg';
import cocopeatImg from './assets/images/cocopeat.jpg';
import boneMealImg from './assets/images/bone-meal.svg';

// Verified Product Catalog
export const PRODUCTS = [
  {
    id: 'combo-pack-ultimate',
    title: 'The 5-in-1 Complete Plant Health Combo',
    nepaliTitle: 'सम्पूर्ण बिरुवा स्वास्थ्य कम्बो प्याक',
    shortTitle: '5-in-1 Complete Health Combo',
    category: 'combos',
    weight: 'All-in-One 5-Piece Bundle',
    price: 1499,
    originalPrice: 1899,
    badge: 'Free Valley Delivery',
    badgeType: 'badge-terracotta',
    isFeatured: true,
    image: comboPackImg,
    bestFor: 'Complete rooftop garden setup or seasonal terrace revitalization',
    summary: 'Everything Kathmandu plant growers need in one balanced delivery: 20 KG Vermicompost, 1 Cocopeat Block (expands to 9L), 1 KG Mustard Pina, 1 KG Steamed Bone Meal, and Pure Neem Khali. Free delivery to your doorstep anywhere in Kathmandu Valley.',
    includedItems: [
      '20 KG Pure Vermicompost (Heavy-duty sack)',
      '1× Low-EC Cocopeat Block (Expands to 9 Litres)',
      '1 KG Natural Mustard Cake Pina (Bio-Nitrogen)',
      '1 KG Steamed Bone Meal (Phosphorus for Blooms)',
      'Pure Neem Khali (Root Protection against Soil Grubs)'
    ],
    features: [
      'Enough organic nutrition for 15 to 25 standard rooftop pots',
      'Free doorstep delivery across Kathmandu, Lalitpur & Bhaktapur',
      'Saves Rs. 400 compared to buying items individually',
      'Doorstep terrace & rooftop carry assistance available'
    ],
    specs: {
      'Total Weight': '~23.5 KG Complete Kit',
      'Ideal Use': 'Pots, Growbags & Terrace Beds',
      'Valley Delivery': '100% FREE',
      'Payment': 'Cash on Delivery, eSewa, Fonepay QR'
    },
    usage: 'Mix 1 part Vermicompost + 1 part Cocopeat + 2 parts local red/garden soil. Top with 1 handful of Neem Khali and 1 spoon of Bone Meal per pot.'
  },
  {
    id: 'cow-dung-25kg',
    title: 'Aged Cow Dung Compost (गोबर मल)',
    nepaliTitle: 'पाकेको गोबर मल (कम्पोस्ट)',
    shortTitle: 'Aged Cow Dung Compost',
    category: 'fertilizers',
    weight: '25 KG Heavy-Duty Sack',
    price: 500,
    originalPrice: 650,
    badge: 'Tokha Yard Aged',
    badgeType: 'badge-leaf',
    image: cowDungImg,
    bestFor: 'Rooftop vegetable containers, lemon & fruit trees, potted roses, flowerbeds',
    summary: 'Naturally aged for 120 days at our Tokha composting yard. 100% cured organic cow manure, free from active weed seeds and pathogens, with dark crumbly texture and zero foul odor.',
    features: [
      'Cured & aged 120 days — completely odorless and dry',
      'Retains vital root moisture during Kathmandu dry spells',
      'Screened through fine mesh for easy potting soil blending',
      'Delivery available from single trial sack to truckloads'
    ],
    specs: {
      'Curing Time': '120 Days Natural Windrow Aeration',
      'Moisture Content': 'Balanced (< 25%)',
      'Weed Seeds': 'Zero (Eliminated by compost heat)',
      'Sack Weight': '25 KG net weight'
    },
    usage: 'Blend 30% Aged Compost with 50% local soil and 20% Cocopeat for optimal drainage and aeration.'
  },
  {
    id: 'vermicompost-5kg',
    title: 'Pure Earthworm Vermicompost (गड्यौला मल)',
    nepaliTitle: 'शुद्ध भर्मी कम्पोस्ट (गड्यौला मल)',
    shortTitle: 'Pure Vermicompost (Worm Castings)',
    category: 'fertilizers',
    weight: '5 KG Kraft Pouch (Bulk 25kg also available)',
    price: 250,
    originalPrice: 300,
    badge: '100% Pure Castings',
    badgeType: 'badge-leaf',
    image: vermiImg,
    bestFor: 'Indoor houseplants, monstera, herbs, potted tomatoes, delicate seedlings',
    summary: 'High-density organic earthworm castings (Eisenia fetida) rich in living beneficial soil microbes, humic acids, and natural growth hormones. Will never burn delicate roots.',
    features: [
      'Concentrated vermicastings — 5× richer in bio-available nutrition',
      'Safe for sensitive indoor flora and exotic ornamentals',
      'Improves water penetration in tight clay pots',
      'Bulk 25kg sacks available upon request at Rs. 50/kg'
    ],
    specs: {
      'Source': 'Eisenia fetida worm beds (Tokha)',
      'Texture': 'Fine, coffee-ground crumb',
      'Burn Risk': 'Zero — safe at any dosage',
      'Packaging': '5 KG lined moisture-lock bag'
    },
    usage: 'Add 2–3 handfuls around topsoil once every 3 weeks, then gently water.'
  },
  {
    id: 'neem-khali-1kg',
    title: 'Pure Organic Neem Khali (नीमको पिना)',
    nepaliTitle: 'शुद्ध नीमको पिना (जैविक कीटनाशक)',
    shortTitle: 'Organic Neem Khali',
    category: 'amendments',
    weight: '1 KG Stand-up Kraft Pouch',
    price: 180,
    originalPrice: 220,
    badge: 'Root Grub Shield',
    badgeType: 'badge-terracotta',
    image: neemImg,
    bestFor: 'Preventing subterranean white grubs, termite root damage, organic soil bio-defense',
    summary: 'Cold-pressed natural neem seed cake flakes. Acts as an organic nematicide while providing slow-release bio-nitrogen and strengthening plant cell walls naturally.',
    features: [
      'Eliminates root-eating grubs and soil-borne larvae',
      'Slows nitrogen loss to keep nutrients in pots longer',
      'Child and pet safe alternative to chemical poison powders',
      'Derived from 100% natural Azadirachta indica seeds'
    ],
    specs: {
      'Active Constituent': 'Natural Azadirachtin',
      'Form': 'Crushed organic cake flakes',
      'Action': 'Bio-nematicide & root protection',
      'Net Weight': '1 KG sealed pouch'
    },
    usage: 'Mix 2 tablespoons (approx 30g) into potting soil per 12-inch pot once a month.'
  },
  {
    id: 'cocopeat-650g',
    title: 'Low-EC Horticultural Cocopeat Block',
    nepaliTitle: 'धुएको कोकोपिट ब्लक (९ लिटर)',
    shortTitle: 'Horticultural Cocopeat Block',
    category: 'amendments',
    weight: '650g Brick (Expands to ~9 Litres)',
    price: 140,
    originalPrice: 180,
    badge: 'Low Salinity Washed',
    badgeType: 'badge-leaf',
    image: cocopeatImg,
    bestFor: 'Lightening heavy rooftop pots, water conservation, seed starting',
    summary: 'Triple mountain-water washed low-EC coir pith. Expands up to 8× in volume into 9 litres of fluffy potting medium that reduces roof structural load and keeps roots cool.',
    features: [
      'Washed to Low EC (< 0.5 mS/cm) to prevent root salt damage',
      'Holds up to 9× its weight in water, reducing daily watering needs',
      'Significantly lightens soil weight on rooftop concrete slabs',
      'Ideal growing medium for seed trays and cuttings'
    ],
    specs: {
      'Expansion Volume': 'Yields 8 to 9 Litres when rehydrated',
      'Salinity (EC)': '< 0.5 mS/cm (Triple Washed)',
      'pH Value': '5.8 – 6.5 (Optimal)',
      'Brick Weight': '650g compact brick'
    },
    usage: 'Place brick in a bucket with 3–4 litres of clean water. Allow 15 minutes to expand, then mix 15–20% into potting soil.'
  },
  {
    id: 'bone-meal-1kg',
    title: 'Steamed Bone Meal Organic Fertilizer',
    nepaliTitle: 'स्टिम्ड बोन मिल (फूल र फलको लागि)',
    shortTitle: 'Steamed Bone Meal',
    category: 'fertilizers',
    weight: '1 KG Botanical Pack',
    price: 160,
    originalPrice: 200,
    badge: 'Bloom & Root Booster',
    badgeType: 'badge-terracotta',
    image: boneMealImg,
    bestFor: 'Flowering roses, bougainvillea, fruit trees (lemons, guavas), root formation',
    summary: 'Finely milled sterilized steamed bone meal powder loaded with natural phosphorus (22%) and organic calcium (30%). Slow-release feeding that drives abundant flowering.',
    features: [
      '22% natural organic phosphorus for vigorous blooms',
      '30% organic calcium prevents blossom drop & fruit rot',
      'Sterilized with high-pressure steam — safe and clean',
      'Does not leach out during Kathmandu monsoon rains'
    ],
    specs: {
      'Natural Phosphorus (P)': '22% Slow-release form',
      'Organic Calcium (Ca)': '30%',
      'Processing': 'High-pressure steam sterilization',
      'Net Weight': '1 KG pack'
    },
    usage: 'Sprinkle 1 tablespoon around the base of flowering plants or fruit trees every 40 days.'
  }
];

// Shopping Cart State
let cart = [];

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  loadCartFromStorage();
  renderProducts('all');
  initFilterTabs();
  initCartDrawer();
  initFaqAccordion();
  initMobileMenu();
  initScrollHeader();
  updateCartUI();

  // Expose global helpers for inline click handlers
  window.addToCart = addToCart;
  window.addToCartFromCard = addToCartFromCard;
  window.adjustCardQuantity = adjustCardQuantity;
  window.adjustCartQuantity = adjustCartQuantity;
  window.removeFromCart = removeFromCart;
  window.openQuickView = openQuickView;
  window.closeModal = closeModal;
  window.orderProductWhatsApp = orderProductWhatsApp;
  window.checkoutWhatsApp = checkoutWhatsApp;
  window.openCart = openCart;
  window.closeCart = closeCart;
});

// Storage Management
function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem('kinnau_cart_v2');
    if (saved) {
      cart = JSON.parse(saved);
    }
  } catch (e) {
    console.error('Cart load error', e);
    cart = [];
  }
}

function saveCartToStorage() {
  try {
    localStorage.setItem('kinnau_cart_v2', JSON.stringify(cart));
  } catch (e) {
    console.error('Cart save error', e);
  }
}

// Render Products Catalog
function renderProducts(category) {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = category === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === category);

  grid.innerHTML = filtered.map(product => {
    return `
      <article class="product-card ${product.isFeatured ? 'is-flagship' : ''}" data-id="${product.id}">
        <div class="product-media">
          <img src="${product.image}" alt="${product.title}" class="product-img" loading="lazy">
          <div class="product-badges-row">
            <span class="badge ${product.badgeType}">${product.badge}</span>
            <span class="weight-tag">${product.weight}</span>
          </div>
        </div>

        <div class="product-content">
          <div class="product-eyebrow">
            <span>${product.nepaliTitle}</span>
          </div>
          
          <h3 class="product-title">${product.shortTitle}</h3>
          
          <p class="product-best-for">
            <strong>Best for:</strong> ${product.bestFor}
          </p>

          <p class="product-summary">${product.summary}</p>

          <div class="product-price-row">
            <div class="price-wrap">
              <span class="price-val">Rs. ${product.price.toLocaleString()}</span>
              ${product.originalPrice ? `<span class="price-old">Rs. ${product.originalPrice.toLocaleString()}</span>` : ''}
            </div>
            <button class="details-link-btn" onclick="openQuickView('${product.id}')" title="View details and usage guide">
              Guide &amp; Specs →
            </button>
          </div>

          <div class="product-actions-wrap">
            <div class="stepper-row">
              <div class="stepper" id="stepper-${product.id}">
                <button class="stepper-btn" onclick="adjustCardQuantity('${product.id}', -1)" aria-label="Decrease quantity">−</button>
                <input type="text" class="stepper-input" id="qty-${product.id}" value="1" readonly aria-label="Quantity">
                <button class="stepper-btn" onclick="adjustCardQuantity('${product.id}', 1)" aria-label="Increase quantity">+</button>
              </div>
              <button class="btn btn-primary btn-add-cart" onclick="addToCartFromCard('${product.id}')">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <span>Add to Cart</span>
              </button>
            </div>

            <button class="btn btn-whatsapp-subtle" onclick="orderProductWhatsApp('${product.id}')">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2z"/>
              </svg>
              <span>Instant WhatsApp Order</span>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

// Filter Tabs Management
function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const category = tab.getAttribute('data-category');
      renderProducts(category);
    });
  });
}

// Card Quantity Adjustments
function adjustCardQuantity(productId, change) {
  const input = document.getElementById(`qty-${productId}`);
  if (!input) return;
  let val = parseInt(input.value, 10) || 1;
  val = Math.max(1, Math.min(99, val + change));
  input.value = val;
}

function addToCartFromCard(productId) {
  const input = document.getElementById(`qty-${productId}`);
  const qty = input ? parseInt(input.value, 10) || 1 : 1;
  addToCart(productId, qty);
  if (input) input.value = 1;
}

// Cart Core Operations
function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      title: product.shortTitle,
      weight: product.weight,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }

  saveCartToStorage();
  updateCartUI();
  showToast(`Added ${quantity}× ${product.shortTitle} to cart`);
  openCart();
}

function adjustCartQuantity(productId, change) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;

  item.quantity += change;
  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCartToStorage();
  updateCartUI();
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.id !== productId);
  saveCartToStorage();
  updateCartUI();
}

// Update Cart UI, Delivery & Drawer State
function updateCartUI() {
  const badge = document.querySelector('.cart-badge');
  const itemsContainer = document.getElementById('cart-items-list');
  const emptyMsg = document.getElementById('empty-cart-msg');
  const drawerFooter = document.getElementById('drawer-footer');
  const subtotalEl = document.getElementById('cart-subtotal');
  const deliveryEl = document.getElementById('cart-delivery');
  const totalEl = document.getElementById('cart-total');
  const bannerEl = document.getElementById('cart-delivery-banner');

  const totalItemsCount = cart.reduce((acc, i) => acc + i.quantity, 0);

  // Update badge in header
  if (badge) {
    if (totalItemsCount > 0) {
      badge.textContent = totalItemsCount;
      badge.style.display = 'inline-flex';
    } else {
      badge.style.display = 'none';
    }
  }

  // Calculate pricing
  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  const hasCombo = cart.some(i => i.id === 'combo-pack-ultimate');
  
  // Valley delivery rule: Free if >= 1000 or includes combo pack, else Rs. 100
  let isFreeDelivery = subtotal >= 1000 || hasCombo;
  let deliveryFee = subtotal === 0 ? 0 : (isFreeDelivery ? 0 : 100);
  let total = subtotal + deliveryFee;

  if (cart.length === 0) {
    if (emptyMsg) emptyMsg.style.display = 'block';
    if (itemsContainer) itemsContainer.innerHTML = '';
    if (drawerFooter) drawerFooter.style.display = 'none';
    return;
  }

  if (emptyMsg) emptyMsg.style.display = 'none';
  if (drawerFooter) drawerFooter.style.display = 'block';

  // Render Items List
  if (itemsContainer) {
    itemsContainer.innerHTML = cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.image}" alt="${item.title}" class="cart-item-img">
        <div class="cart-item-info">
          <div class="cart-item-title">${item.title}</div>
          <div class="cart-item-meta">${item.weight}</div>
          <div class="cart-item-price">Rs. ${item.price.toLocaleString()} each</div>
          <div class="cart-item-stepper-row">
            <div class="stepper sm">
              <button class="stepper-btn" onclick="adjustCartQuantity('${item.id}', -1)" aria-label="Decrease">−</button>
              <span class="stepper-count">${item.quantity}</span>
              <button class="stepper-btn" onclick="adjustCartQuantity('${item.id}', 1)" aria-label="Increase">+</button>
            </div>
            <span class="cart-item-subtotal">Rs. ${(item.price * item.quantity).toLocaleString()}</span>
            <button class="cart-item-remove" onclick="removeFromCart('${item.id}')" title="Remove item">
              Remove
            </button>
          </div>
        </div>
      </div>
    `).join('');
  }

  // Update summary amounts
  if (subtotalEl) subtotalEl.textContent = `Rs. ${subtotal.toLocaleString()}`;
  if (deliveryEl) {
    if (isFreeDelivery) {
      deliveryEl.innerHTML = `<span style="color: var(--color-leaf); font-weight: 700;">FREE DELIVERY</span>`;
    } else {
      deliveryEl.textContent = `Rs. ${deliveryFee}`;
    }
  }
  if (totalEl) totalEl.textContent = `Rs. ${total.toLocaleString()}`;

  // Update delivery banner message
  if (bannerEl) {
    if (isFreeDelivery) {
      bannerEl.className = 'delivery-banner free';
      bannerEl.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span><strong>You unlocked FREE Valley Delivery!</strong> (Direct dispatch from Tokha)</span>
      `;
    } else {
      const remaining = 1000 - subtotal;
      bannerEl.className = 'delivery-banner pending';
      bannerEl.innerHTML = `
        <span>Add <strong>Rs. ${remaining.toLocaleString()}</strong> more or add the Combo Pack for <strong>FREE Valley Delivery</strong></span>
      `;
    }
  }
}

// Slide-out Cart Drawer Management
function initCartDrawer() {
  const toggleBtn = document.getElementById('cart-toggle-btn');
  const closeBtn = document.getElementById('drawer-close-btn');
  const backdrop = document.getElementById('drawer-backdrop');

  if (toggleBtn) toggleBtn.addEventListener('click', openCart);
  if (closeBtn) closeBtn.addEventListener('click', closeCart);
  if (backdrop) backdrop.addEventListener('click', closeCart);

  // Escape key closes drawer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeCart();
      closeModal();
    }
  });
}

function openCart() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  if (drawer) drawer.classList.add('is-open');
  if (backdrop) backdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  const drawer = document.getElementById('cart-drawer');
  const backdrop = document.getElementById('drawer-backdrop');
  if (drawer) drawer.classList.remove('is-open');
  if (backdrop) backdrop.classList.remove('is-open');
  document.body.style.overflow = '';
}

// Quick View Modal
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const container = document.getElementById('modal-container');
  const backdrop = document.getElementById('modal-backdrop');
  if (!container || !backdrop) return;

  const specsList = Object.entries(product.specs || {}).map(([key, value]) => `
    <div class="spec-row">
      <span class="spec-label">${key}</span>
      <span class="spec-value">${value}</span>
    </div>
  `).join('');

  container.innerHTML = `
    <div class="modal-card">
      <button class="modal-close-btn" onclick="closeModal()" aria-label="Close details">✕</button>
      
      <div class="modal-grid">
        <div class="modal-media">
          <img src="${product.image}" alt="${product.title}">
          <div class="modal-badge-box">
            <span class="badge ${product.badgeType}">${product.badge}</span>
            <span class="weight-tag">${product.weight}</span>
          </div>
        </div>

        <div class="modal-info">
          <div class="modal-eyebrow">${product.nepaliTitle}</div>
          <h2 class="modal-title">${product.title}</h2>
          
          <div class="modal-price-box">
            <span class="modal-price">Rs. ${product.price.toLocaleString()}</span>
            ${product.originalPrice ? `<span class="modal-old-price">Rs. ${product.originalPrice.toLocaleString()}</span>` : ''}
          </div>

          <p class="modal-desc">${product.summary}</p>

          <div class="modal-usage-box">
            <div class="modal-usage-title">🌱 Practical Application Guide</div>
            <p>${product.usage}</p>
          </div>

          <div class="modal-specs-table">
            ${specsList}
          </div>

          <div class="modal-cta-row">
            <button class="btn btn-primary" onclick="addToCart('${product.id}', 1); closeModal();" style="flex: 1;">
              Add to Cart
            </button>
            <button class="btn btn-whatsapp" onclick="orderProductWhatsApp('${product.id}')">
              WhatsApp Order
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  backdrop.classList.add('is-open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const backdrop = document.getElementById('modal-backdrop');
  if (backdrop) backdrop.classList.remove('is-open');
  document.body.style.overflow = '';
}

// WhatsApp Direct Checkout Generators
function orderProductWhatsApp(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const phone = '9779851167274';
  const text = encodeURIComponent(
`Namaste Kinnau Suppliers! 🌱
I would like to order:
• 1× ${product.title} (${product.weight}) — Rs. ${product.price.toLocaleString()}

My Kathmandu Delivery Details:
Name: 
Area / Delivery Address: 
Contact Number: 

Please confirm dispatch time from your Tokha facility. Thank you!`
  );

  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}

function checkoutWhatsApp() {
  if (cart.length === 0) return;

  const phone = '9779851167274';
  const subtotal = cart.reduce((acc, i) => acc + (i.price * i.quantity), 0);
  const hasCombo = cart.some(i => i.id === 'combo-pack-ultimate');
  const isFreeDelivery = subtotal >= 1000 || hasCombo;
  const deliveryFee = isFreeDelivery ? 0 : 100;
  const total = subtotal + deliveryFee;

  const itemsText = cart.map(item => 
    `• ${item.quantity}× ${item.title} (${item.weight}) — Rs. ${(item.price * item.quantity).toLocaleString()}`
  ).join('\n');

  const text = encodeURIComponent(
`Namaste Kinnau Suppliers! 🌱
I would like to place this order from your digital storefront:

${itemsText}
----------------------------------------
Subtotal: Rs. ${subtotal.toLocaleString()}
Delivery Fee (Valley): ${isFreeDelivery ? 'FREE' : 'Rs. 100'}
Total Amount: Rs. ${total.toLocaleString()}

My Kathmandu Delivery Details:
Name: 
Delivery Address (e.g., Baluwatar / Jhamsikhel / Tokha): 
Contact Phone: 
Payment Method: [Cash on Delivery / eSewa / Fonepay QR]
Need help carrying heavy sacks up to rooftop? [Yes / No]

Please confirm dispatch from Tokha. Thank you!`
  );

  window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
}

// FAQ Accordion
function initFaqAccordion() {
  const items = document.querySelectorAll('.faq-item');
  items.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;
    questionBtn.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      items.forEach(i => i.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });
}

// Mobile Menu Navigation
function initMobileMenu() {
  const trigger = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-nav-drawer');
  const links = document.querySelectorAll('.mobile-nav-link');

  if (trigger && drawer) {
    trigger.addEventListener('click', () => {
      drawer.classList.toggle('is-open');
    });

    links.forEach(link => {
      link.addEventListener('click', () => {
        drawer.classList.remove('is-open');
      });
    });
  }
}

// Sticky Header & Active Nav Highlights
function initScrollHeader() {
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}

// Toast notification for tactile feedback
function showToast(message) {
  let toast = document.getElementById('app-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'app-toast';
    toast.className = 'app-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}
