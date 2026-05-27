const products = [
  {
    id: 1,
    name: "Samsung Galaxy M14",
    brand: "Samsung",
    category: "Electronics",
    rating: 4.4,
    stock: 18,
    tags: ["5G", "6000mAh", "FHD+"],
    description: "5G smartphone with large battery and smooth daily performance.",
    platforms: [
      { name: "Amazon", price: 12999, delivery: 40, discount: 8 },
      { name: "Flipkart", price: 12499, delivery: 0, discount: 10 },
      { name: "Croma", price: 13150, delivery: 60, discount: 5 }
    ]
  },
  {
    id: 2,
    name: "Realme Narzo 60",
    brand: "Realme",
    category: "Electronics",
    rating: 4.3,
    stock: 22,
    tags: ["AMOLED", "5G", "Fast Charge"],
    description: "Budget-friendly 5G phone with AMOLED display and stylish design.",
    platforms: [
      { name: "Amazon", price: 15999, delivery: 50, discount: 7 },
      { name: "Flipkart", price: 15499, delivery: 0, discount: 10 },
      { name: "Reliance", price: 16100, delivery: 45, discount: 6 }
    ]
  },
  {
    id: 3,
    name: "Redmi Note 13",
    brand: "Xiaomi",
    category: "Electronics",
    rating: 4.5,
    stock: 15,
    tags: ["120Hz", "Camera", "5G"],
    description: "Balanced smartphone with strong camera and smooth refresh rate.",
    platforms: [
      { name: "Amazon", price: 17499, delivery: 40, discount: 9 },
      { name: "Flipkart", price: 16999, delivery: 0, discount: 11 },
      { name: "Croma", price: 17650, delivery: 70, discount: 4 }
    ]
  },
  {
    id: 4,
    name: "Boat Rockerz 450",
    brand: "Boat",
    category: "Electronics",
    rating: 4.0,
    stock: 20,
    tags: ["Headphones", "Bluetooth", "Bass"],
    description: "Wireless headphones with deep bass and foldable build.",
    platforms: [
      { name: "Amazon", price: 1499, delivery: 20, discount: 11 },
      { name: "Flipkart", price: 1399, delivery: 0, discount: 13 },
      { name: "Croma", price: 1599, delivery: 35, discount: 7 }
    ]
  },
  {
    id: 5,
    name: "JBL Go 3",
    brand: "JBL",
    category: "Electronics",
    rating: 4.6,
    stock: 12,
    tags: ["Speaker", "Portable", "Waterproof"],
    description: "Portable Bluetooth speaker with premium audio and bold design.",
    platforms: [
      { name: "Amazon", price: 2799, delivery: 0, discount: 12 },
      { name: "Flipkart", price: 2899, delivery: 0, discount: 8 },
      { name: "Reliance", price: 2949, delivery: 30, discount: 7 }
    ]
  },
  {
    id: 6,
    name: "HP Wireless Mouse",
    brand: "HP",
    category: "Accessories",
    rating: 4.2,
    stock: 30,
    tags: ["Wireless", "Compact", "Office"],
    description: "Compact wireless mouse for productivity and travel use.",
    platforms: [
      { name: "Amazon", price: 799, delivery: 30, discount: 6 },
      { name: "Flipkart", price: 749, delivery: 0, discount: 8 },
      { name: "Reliance", price: 820, delivery: 20, discount: 5 }
    ]
  },
  {
    id: 7,
    name: "Logitech K380 Keyboard",
    brand: "Logitech",
    category: "Accessories",
    rating: 4.7,
    stock: 14,
    tags: ["Bluetooth", "Multi-device", "Portable"],
    description: "Multi-device keyboard that connects easily to laptops and tablets.",
    platforms: [
      { name: "Amazon", price: 2999, delivery: 0, discount: 10 },
      { name: "Flipkart", price: 3099, delivery: 0, discount: 7 },
      { name: "Croma", price: 3249, delivery: 40, discount: 5 }
    ]
  },
  {
    id: 8,
    name: "Sandisk 128GB Pendrive",
    brand: "Sandisk",
    category: "Accessories",
    rating: 4.4,
    stock: 34,
    tags: ["Storage", "USB 3.0", "Portable"],
    description: "High-speed pendrive for backup, media, and document transfer.",
    platforms: [
      { name: "Amazon", price: 899, delivery: 0, discount: 14 },
      { name: "Flipkart", price: 949, delivery: 0, discount: 10 },
      { name: "Reliance", price: 999, delivery: 25, discount: 8 }
    ]
  },
  {
    id: 9,
    name: "Noise Smart Watch",
    brand: "Noise",
    category: "Wearables",
    rating: 4.1,
    stock: 25,
    tags: ["Fitness", "Calling", "Smartwatch"],
    description: "Affordable smartwatch with fitness tracking and calling features.",
    platforms: [
      { name: "Amazon", price: 2499, delivery: 40, discount: 12 },
      { name: "Flipkart", price: 2299, delivery: 0, discount: 15 },
      { name: "Myntra", price: 2599, delivery: 50, discount: 9 }
    ]
  },
  {
    id: 10,
    name: "Fire-Boltt Ninja Call",
    brand: "Fire-Boltt",
    category: "Wearables",
    rating: 4.0,
    stock: 19,
    tags: ["Calling", "Smartwatch", "Fitness"],
    description: "Feature-rich smartwatch with calling and health monitoring.",
    platforms: [
      { name: "Amazon", price: 1999, delivery: 30, discount: 16 },
      { name: "Flipkart", price: 1899, delivery: 0, discount: 18 },
      { name: "Myntra", price: 2149, delivery: 40, discount: 10 }
    ]
  },
  {
    id: 11,
    name: "Titan Smart Band",
    brand: "Titan",
    category: "Wearables",
    rating: 4.5,
    stock: 16,
    tags: ["Premium", "Band", "Health"],
    description: "Premium smart band with elegant design and strong tracking features.",
    platforms: [
      { name: "Amazon", price: 3499, delivery: 0, discount: 9 },
      { name: "Flipkart", price: 3399, delivery: 0, discount: 11 },
      { name: "Croma", price: 3599, delivery: 45, discount: 6 }
    ]
  },
  {
    id: 12,
    name: "Puma Running Shoes",
    brand: "Puma",
    category: "Fashion",
    rating: 4.3,
    stock: 14,
    tags: ["Running", "Comfort", "Shoes"],
    description: "Comfortable running shoes designed for daily workouts.",
    platforms: [
      { name: "Amazon", price: 3199, delivery: 70, discount: 10 },
      { name: "Flipkart", price: 2999, delivery: 40, discount: 14 },
      { name: "Myntra", price: 2899, delivery: 0, discount: 18 }
    ]
  },
  {
    id: 13,
    name: "Levis Denim Jacket",
    brand: "Levis",
    category: "Fashion",
    rating: 4.6,
    stock: 11,
    tags: ["Jacket", "Denim", "Casual"],
    description: "Classic denim jacket for a stylish casual wardrobe.",
    platforms: [
      { name: "Amazon", price: 3499, delivery: 40, discount: 10 },
      { name: "Myntra", price: 3299, delivery: 0, discount: 16 },
      { name: "Ajio", price: 3399, delivery: 20, discount: 14 }
    ]
  },
  {
    id: 14,
    name: "Nike Sports T-Shirt",
    brand: "Nike",
    category: "Fashion",
    rating: 4.4,
    stock: 26,
    tags: ["T-Shirt", "Sportswear", "Lightweight"],
    description: "Breathable sportswear t-shirt for training and casual use.",
    platforms: [
      { name: "Amazon", price: 1499, delivery: 30, discount: 9 },
      { name: "Myntra", price: 1399, delivery: 0, discount: 14 },
      { name: "Ajio", price: 1449, delivery: 20, discount: 12 }
    ]
  },
  {
    id: 15,
    name: "Milton Water Bottle",
    brand: "Milton",
    category: "Home",
    rating: 4.5,
    stock: 40,
    tags: ["Bottle", "Daily Use", "Kitchen"],
    description: "Durable water bottle designed for regular daily use.",
    platforms: [
      { name: "Amazon", price: 599, delivery: 25, discount: 4 },
      { name: "Flipkart", price: 549, delivery: 0, discount: 6 },
      { name: "JioMart", price: 575, delivery: 15, discount: 5 }
    ]
  },
  {
    id: 16,
    name: "Prestige Induction Cooktop",
    brand: "Prestige",
    category: "Home",
    rating: 4.3,
    stock: 13,
    tags: ["Kitchen", "Induction", "Energy Efficient"],
    description: "Compact induction cooktop with preset cooking menus.",
    platforms: [
      { name: "Amazon", price: 2499, delivery: 0, discount: 15 },
      { name: "Flipkart", price: 2399, delivery: 0, discount: 17 },
      { name: "Reliance", price: 2549, delivery: 30, discount: 11 }
    ]
  },
  {
    id: 17,
    name: "Philips Steam Iron",
    brand: "Philips",
    category: "Home",
    rating: 4.4,
    stock: 17,
    tags: ["Appliance", "Steam", "Iron"],
    description: "Steam iron for faster wrinkle removal and easy fabric care.",
    platforms: [
      { name: "Amazon", price: 1899, delivery: 0, discount: 12 },
      { name: "Flipkart", price: 1849, delivery: 0, discount: 13 },
      { name: "Croma", price: 1949, delivery: 35, discount: 8 }
    ]
  },
  {
    id: 18,
    name: "Mamaearth Face Wash",
    brand: "Mamaearth",
    category: "Beauty",
    rating: 4.2,
    stock: 28,
    tags: ["Skincare", "Face Wash", "Daily Care"],
    description: "Gentle face wash suited for daily skincare routine.",
    platforms: [
      { name: "Amazon", price: 249, delivery: 20, discount: 8 },
      { name: "Nykaa", price: 239, delivery: 0, discount: 10 },
      { name: "JioMart", price: 259, delivery: 15, discount: 6 }
    ]
  },
  {
    id: 19,
    name: "Lakme Lip Color",
    brand: "Lakme",
    category: "Beauty",
    rating: 4.1,
    stock: 32,
    tags: ["Makeup", "Lip Color", "Beauty"],
    description: "Long-lasting lip color available in versatile everyday shades.",
    platforms: [
      { name: "Amazon", price: 499, delivery: 20, discount: 7 },
      { name: "Nykaa", price: 459, delivery: 0, discount: 10 },
      { name: "Myntra", price: 489, delivery: 25, discount: 8 }
    ]
  },
  {
    id: 20,
    name: "Maybelline Mascara",
    brand: "Maybelline",
    category: "Beauty",
    rating: 4.6,
    stock: 21,
    tags: ["Mascara", "Makeup", "Popular"],
    description: "Popular mascara known for volume and long-lasting wear.",
    platforms: [
      { name: "Amazon", price: 699, delivery: 20, discount: 9 },
      { name: "Nykaa", price: 649, delivery: 0, discount: 12 },
      { name: "Myntra", price: 679, delivery: 20, discount: 10 }
    ]
  },
  {
    id: 21,
    name: "The Alchemist",
    brand: "HarperCollins",
    category: "Books",
    rating: 4.8,
    stock: 44,
    tags: ["Book", "Fiction", "Bestseller"],
    description: "A bestselling inspirational fiction title for wide audiences.",
    platforms: [
      { name: "Amazon", price: 299, delivery: 0, discount: 20 },
      { name: "Flipkart", price: 289, delivery: 0, discount: 22 },
      { name: "Reliance", price: 320, delivery: 20, discount: 14 }
    ]
  },
  {
    id: 22,
    name: "Atomic Habits",
    brand: "Penguin",
    category: "Books",
    rating: 4.9,
    stock: 38,
    tags: ["Book", "Self Help", "Popular"],
    description: "Widely recommended self-improvement book on habit building.",
    platforms: [
      { name: "Amazon", price: 499, delivery: 0, discount: 18 },
      { name: "Flipkart", price: 479, delivery: 0, discount: 21 },
      { name: "JioMart", price: 525, delivery: 15, discount: 12 }
    ]
  },
  {
    id: 23,
    name: "Nivea Body Lotion",
    brand: "Nivea",
    category: "Beauty",
    rating: 4.4,
    stock: 29,
    tags: ["Body Care", "Moisturizer", "Daily Care"],
    description: "Daily moisturizer for smooth skin with long-lasting hydration.",
    platforms: [
      { name: "Amazon", price: 349, delivery: 0, discount: 11 },
      { name: "Nykaa", price: 339, delivery: 0, discount: 12 },
      { name: "JioMart", price: 359, delivery: 15, discount: 9 }
    ]
  },
  {
    id: 24,
    name: "Adidas Duffel Bag",
    brand: "Adidas",
    category: "Fashion",
    rating: 4.5,
    stock: 18,
    tags: ["Bag", "Travel", "Sports"],
    description: "Spacious duffel bag suited for sports, gym, and short trips.",
    platforms: [
      { name: "Amazon", price: 1899, delivery: 30, discount: 10 },
      { name: "Flipkart", price: 1799, delivery: 0, discount: 13 },
      { name: "Ajio", price: 1849, delivery: 20, discount: 11 }
    ]
  }
];

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const platformFilter = document.getElementById("platformFilter");
const ratingFilter = document.getElementById("ratingFilter");
const sortSelect = document.getElementById("sortSelect");
const budgetInput = document.getElementById("budgetInput");
const budgetButton = document.getElementById("budgetButton");
const budgetResult = document.getElementById("budgetResult");
const budgetValue = document.getElementById("budgetValue");
const productGrid = document.getElementById("productGrid");
const resultCount = document.getElementById("resultCount");
const catalogCount = document.getElementById("catalogCount");
const visibleCount = document.getElementById("visibleCount");
const budgetCount = document.getElementById("budgetCount");
const cheapestDealName = document.getElementById("cheapestDealName");
const cheapestDealMeta = document.getElementById("cheapestDealMeta");
const topRatedName = document.getElementById("topRatedName");
const topRatedMeta = document.getElementById("topRatedMeta");
const discountDealName = document.getElementById("discountDealName");
const discountDealMeta = document.getElementById("discountDealMeta");
const wishlistCount = document.getElementById("wishlistCount");
const wishlistPreview = document.getElementById("wishlistPreview");
const compareCount = document.getElementById("compareCount");
const compareTray = document.getElementById("compareTray");
const insightStrip = document.getElementById("insightStrip");
const showDealsButton = document.getElementById("showDealsButton");
const resetButton = document.getElementById("resetButton");

const wishlist = new Set();
const compareSet = new Set();

function formatCurrency(value) {
  return `Rs. ${value.toLocaleString("en-IN")}`;
}

function getEffectivePrice(platform) {
  return platform.price + platform.delivery;
}

function getBestOffer(product) {
  return product.platforms.reduce((best, current) => (
    getEffectivePrice(current) < getEffectivePrice(best) ? current : best
  ));
}

function getHighestDiscount(product) {
  return product.platforms.reduce((best, current) => current.discount > best.discount ? current : best);
}

function getUniqueValues(field) {
  return [...new Set(products.map(product => product[field]))];
}

function getAllPlatforms() {
  return [...new Set(products.flatMap(product => product.platforms.map(platform => platform.name)))];
}

function populateFilters() {
  getUniqueValues("category").forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });

  getAllPlatforms().forEach(platform => {
    const option = document.createElement("option");
    option.value = platform;
    option.textContent = platform;
    platformFilter.appendChild(option);
  });
}

function getFilteredProducts() {
  const term = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const platform = platformFilter.value;
  const minRating = Number(ratingFilter.value);
  const sortBy = sortSelect.value;
  const budget = Number(budgetInput.value);

  const filtered = products.filter(product => {
    const matchesTerm = product.name.toLowerCase().includes(term) || product.brand.toLowerCase().includes(term);
    const matchesCategory = category === "all" || product.category === category;
    const matchesPlatform = platform === "all" || product.platforms.some(item => item.name === platform);
    const matchesRating = product.rating >= minRating;
    const matchesBudget = getBestOffer(product).price <= budget;

    return matchesTerm && matchesCategory && matchesPlatform && matchesRating && matchesBudget;
  });

  filtered.sort((a, b) => {
    if (sortBy === "price-asc") {
      return getBestOffer(a).price - getBestOffer(b).price;
    }
    if (sortBy === "price-desc") {
      return getBestOffer(b).price - getBestOffer(a).price;
    }
    if (sortBy === "rating-desc") {
      return b.rating - a.rating;
    }
    if (sortBy === "discount-desc") {
      return getHighestDiscount(b).discount - getHighestDiscount(a).discount;
    }
    return a.name.localeCompare(b.name);
  });

  return filtered;
}

function updateHeroStats(filteredProducts) {
  const budget = Number(budgetInput.value);
  const budgetProducts = products.filter(product => getBestOffer(product).price <= budget);
  const cheapest = [...products].sort((a, b) => getBestOffer(a).price - getBestOffer(b).price)[0];
  const topRated = [...products].sort((a, b) => b.rating - a.rating)[0];
  const biggestDiscount = [...products].sort((a, b) => getHighestDiscount(b).discount - getHighestDiscount(a).discount)[0];
  const cheapestOffer = getBestOffer(cheapest);
  const topRatedOffer = getBestOffer(topRated);
  const discountOffer = getHighestDiscount(biggestDiscount);

  catalogCount.textContent = products.length;
  visibleCount.textContent = filteredProducts.length;
  budgetCount.textContent = budgetProducts.length;

  cheapestDealName.textContent = cheapest.name;
  cheapestDealMeta.textContent = `${formatCurrency(cheapestOffer.price)} on ${cheapestOffer.name}`;

  topRatedName.textContent = topRated.name;
  topRatedMeta.textContent = `${topRated.rating.toFixed(1)} stars, best deal ${formatCurrency(topRatedOffer.price)}`;

  discountDealName.textContent = biggestDiscount.name;
  discountDealMeta.textContent = `${discountOffer.discount}% off on ${discountOffer.name}`;
}

function renderInsights(filteredProducts) {
  if (!filteredProducts.length) {
    insightStrip.innerHTML = `
      <div class="insight-card"><span class="card-label">Insight</span><strong>No products match the current filters.</strong></div>
      <div class="insight-card"><span class="card-label">Tip</span><strong>Try increasing the budget or removing a filter.</strong></div>
      <div class="insight-card"><span class="card-label">Action</span><strong>Use Reset Filters to return to the full catalog.</strong></div>
    `;
    return;
  }

  const lowest = [...filteredProducts].sort((a, b) => getBestOffer(a).price - getBestOffer(b).price)[0];
  const highestRated = [...filteredProducts].sort((a, b) => b.rating - a.rating)[0];
  const mostStock = [...filteredProducts].sort((a, b) => b.stock - a.stock)[0];

  insightStrip.innerHTML = `
    <div class="insight-card">
      <span class="card-label">Lowest Cost</span>
      <strong>${lowest.name}</strong>
      <span>${formatCurrency(getBestOffer(lowest).price)} on ${getBestOffer(lowest).name}</span>
    </div>
    <div class="insight-card">
      <span class="card-label">Highest Rated</span>
      <strong>${highestRated.name}</strong>
      <span>${highestRated.rating.toFixed(1)} stars with strong user appeal</span>
    </div>
    <div class="insight-card">
      <span class="card-label">Best Availability</span>
      <strong>${mostStock.name}</strong>
      <span>${mostStock.stock} units available</span>
    </div>
  `;
}

function renderWishlist() {
  wishlistCount.textContent = `${wishlist.size} product${wishlist.size === 1 ? "" : "s"} shortlisted`;

  if (!wishlist.size) {
    wishlistPreview.textContent = "No favorites added yet.";
    return;
  }

  wishlistPreview.innerHTML = [...wishlist]
    .map(id => products.find(product => product.id === id))
    .filter(Boolean)
    .map(product => `<span class="platform-chip">${product.name}</span>`)
    .join("");
}

function renderCompareTray() {
  compareCount.textContent = `${compareSet.size} selected`;

  const selected = [...compareSet].map(id => products.find(product => product.id === id)).filter(Boolean);
  const emptySlots = Math.max(0, 3 - selected.length);

  const compareCards = selected.map(product => {
    const bestOffer = getBestOffer(product);
    return `
      <article class="compare-card filled">
        <span class="card-label">${product.category}</span>
        <h3>${product.name}</h3>
        <p>${product.brand} • ${product.rating.toFixed(1)} stars</p>
        <p>Best Price: <strong>${formatCurrency(bestOffer.price)}</strong></p>
        <p>Platform: <strong>${bestOffer.name}</strong></p>
        <p>Stock: <strong>${product.stock}</strong></p>
      </article>
    `;
  });

  for (let index = 0; index < emptySlots; index += 1) {
    compareCards.push(`
      <article class="compare-card">
        <span class="card-label">Empty Slot</span>
        <h3>Select a product</h3>
        <p>Add products from the catalog to compare them here.</p>
      </article>
    `);
  }

  compareTray.innerHTML = compareCards.join("");
}

function renderProducts() {
  const filtered = getFilteredProducts();
  resultCount.textContent = `${filtered.length} product${filtered.length === 1 ? "" : "s"} found`;
  updateHeroStats(filtered);
  renderInsights(filtered);

  if (!filtered.length) {
    productGrid.innerHTML = `<div class="product-card"><h3>No products found</h3><p>Try a different search term, platform, or budget range.</p></div>`;
    return;
  }

  productGrid.innerHTML = filtered.map(product => {
    const bestOffer = getBestOffer(product);
    const bestDiscount = getHighestDiscount(product);
    const platforms = product.platforms
      .map(platform => `
        <span class="platform-chip">
          ${platform.name}: ${formatCurrency(platform.price)}
        </span>
      `)
      .join("");

    const wishlistActive = wishlist.has(product.id) ? "active" : "";
    const compareActive = compareSet.has(product.id) ? "active" : "";

    return `
      <article class="product-card">
        <div class="product-meta">
          <span class="price-badge">${product.category}</span>
          <strong>${formatCurrency(bestOffer.price)}</strong>
        </div>
        <h3>${product.name}</h3>
        <p class="brand-line">${product.brand} • ${product.rating.toFixed(1)} stars • ${product.stock} in stock</p>
        <p>${product.description}</p>
        <div class="product-highlights">
          ${product.tags.map(tag => `<span class="highlight-pill">${tag}</span>`).join("")}
        </div>
        <div class="platform-list">${platforms}</div>
        <div class="best-deal">
          Best deal on ${bestOffer.name} • Delivery ${formatCurrency(bestOffer.delivery)} • Discount ${bestDiscount.discount}%
        </div>
        <div class="product-actions">
          <button class="mini-button ${wishlistActive}" data-action="wishlist" data-id="${product.id}">Favorite</button>
          <button class="mini-button ${compareActive}" data-action="compare" data-id="${product.id}">Compare</button>
        </div>
      </article>
    `;
  }).join("");
}

function showBudgetRecommendation() {
  const budget = Number(budgetInput.value);
  const affordableProducts = products
    .map(product => ({
      ...product,
      bestOffer: getBestOffer(product)
    }))
    .filter(product => product.bestOffer.price <= budget)
    .sort((a, b) => {
      if (b.rating !== a.rating) {
        return b.rating - a.rating;
      }
      return b.bestOffer.price - a.bestOffer.price;
    });

  if (!affordableProducts.length) {
    budgetResult.textContent = "No product is currently available within this budget.";
    return;
  }

  const bestMatch = affordableProducts[0];
  budgetResult.innerHTML = `
    Best recommendation: <strong>${bestMatch.name}</strong><br>
    Brand: <strong>${bestMatch.brand}</strong><br>
    Best price: <strong>${formatCurrency(bestMatch.bestOffer.price)}</strong> on <strong>${bestMatch.bestOffer.name}</strong><br>
    Rating: <strong>${bestMatch.rating.toFixed(1)}</strong>
  `;
}

function updateBudgetLabel() {
  budgetValue.textContent = formatCurrency(Number(budgetInput.value));
}

function resetFilters() {
  searchInput.value = "";
  categoryFilter.value = "all";
  platformFilter.value = "all";
  ratingFilter.value = "0";
  sortSelect.value = "price-asc";
  budgetInput.value = "25000";
  updateBudgetLabel();
  renderProducts();
  showBudgetRecommendation();
}

function focusOnDeals() {
  sortSelect.value = "discount-desc";
  ratingFilter.value = "4";
  renderProducts();
}

function handleProductActions(event) {
  const button = event.target.closest("[data-action]");
  if (!button) {
    return;
  }

  const id = Number(button.dataset.id);
  const action = button.dataset.action;

  if (action === "wishlist") {
    if (wishlist.has(id)) {
      wishlist.delete(id);
    } else {
      wishlist.add(id);
    }
    renderWishlist();
    renderProducts();
  }

  if (action === "compare") {
    if (compareSet.has(id)) {
      compareSet.delete(id);
    } else if (compareSet.size < 3) {
      compareSet.add(id);
    }
    renderCompareTray();
    renderProducts();
  }
}

populateFilters();
updateBudgetLabel();
renderWishlist();
renderCompareTray();
renderProducts();
showBudgetRecommendation();

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);
platformFilter.addEventListener("change", renderProducts);
ratingFilter.addEventListener("change", renderProducts);
sortSelect.addEventListener("change", renderProducts);
budgetInput.addEventListener("input", () => {
  updateBudgetLabel();
  renderProducts();
  showBudgetRecommendation();
});
budgetButton.addEventListener("click", showBudgetRecommendation);
productGrid.addEventListener("click", handleProductActions);
showDealsButton.addEventListener("click", focusOnDeals);
resetButton.addEventListener("click", resetFilters);
