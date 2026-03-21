const products = [
  {
    id: 1,
    name: "Samsung Galaxy M14",
    category: "Electronics",
    prices: { Amazon: 12999, Flipkart: 12499, Croma: 13150 }
  },
  {
    id: 2,
    name: "Noise Smart Watch",
    category: "Wearables",
    prices: { Amazon: 2499, Flipkart: 2299, Myntra: 2599 }
  },
  {
    id: 3,
    name: "Puma Running Shoes",
    category: "Fashion",
    prices: { Amazon: 3199, Flipkart: 2999, Myntra: 2899 }
  },
  {
    id: 4,
    name: "HP Wireless Mouse",
    category: "Accessories",
    prices: { Amazon: 799, Flipkart: 749, Reliance: 820 }
  },
  {
    id: 5,
    name: "Boat Rockerz 450",
    category: "Electronics",
    prices: { Amazon: 1499, Flipkart: 1399, Croma: 1599 }
  },
  {
    id: 6,
    name: "Milton Water Bottle",
    category: "Home",
    prices: { Amazon: 599, Flipkart: 549, JioMart: 575 }
  }
];

const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortSelect = document.getElementById("sortSelect");
const budgetInput = document.getElementById("budgetInput");
const budgetButton = document.getElementById("budgetButton");
const budgetResult = document.getElementById("budgetResult");
const productGrid = document.getElementById("productGrid");
const resultCount = document.getElementById("resultCount");

function getLowestPrice(prices) {
  return Math.min(...Object.values(prices));
}

function getBestPlatform(prices) {
  return Object.entries(prices).reduce((best, current) => current[1] < best[1] ? current : best);
}

function populateCategories() {
  const categories = [...new Set(products.map(product => product.category))];
  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categoryFilter.appendChild(option);
  });
}

function getFilteredProducts() {
  const term = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const sortBy = sortSelect.value;

  const filtered = products.filter(product => {
    const matchesName = product.name.toLowerCase().includes(term);
    const matchesCategory = category === "all" || product.category === category;
    return matchesName && matchesCategory;
  });

  filtered.sort((a, b) => {
    if (sortBy === "price-asc") {
      return getLowestPrice(a.prices) - getLowestPrice(b.prices);
    }
    if (sortBy === "price-desc") {
      return getLowestPrice(b.prices) - getLowestPrice(a.prices);
    }
    return a.name.localeCompare(b.name);
  });

  return filtered;
}

function renderProducts() {
  const filtered = getFilteredProducts();
  resultCount.textContent = `${filtered.length} product${filtered.length === 1 ? "" : "s"} found`;

  if (!filtered.length) {
    productGrid.innerHTML = `<div class="product-card"><h3>No products found</h3><p>Try a different search term or filter.</p></div>`;
    return;
  }

  productGrid.innerHTML = filtered.map(product => {
    const [bestPlatform, bestPrice] = getBestPlatform(product.prices);
    const platforms = Object.entries(product.prices)
      .map(([platform, price]) => `<span class="platform-chip">${platform}: Rs. ${price}</span>`)
      .join("");

    return `
      <article class="product-card">
        <div class="product-meta">
          <span class="price-badge">${product.category}</span>
          <strong>Rs. ${bestPrice}</strong>
        </div>
        <h3>${product.name}</h3>
        <div class="platform-list">${platforms}</div>
        <div class="best-deal">Best deal on ${bestPlatform}</div>
      </article>
    `;
  }).join("");
}

function showBudgetRecommendation() {
  const budget = Number(budgetInput.value);

  if (!budget) {
    budgetResult.textContent = "Enter a budget to get recommendations.";
    return;
  }

  const affordableProducts = products
    .map(product => ({
      ...product,
      lowestPrice: getLowestPrice(product.prices),
      bestDeal: getBestPlatform(product.prices)
    }))
    .filter(product => product.lowestPrice <= budget)
    .sort((a, b) => b.lowestPrice - a.lowestPrice);

  if (!affordableProducts.length) {
    budgetResult.textContent = "No product is available within this budget.";
    return;
  }

  const bestMatch = affordableProducts[0];
  budgetResult.innerHTML = `
    Best budget match: <strong>${bestMatch.name}</strong><br>
    Price: <strong>Rs. ${bestMatch.lowestPrice}</strong><br>
    Platform: <strong>${bestMatch.bestDeal[0]}</strong>
  `;
}

populateCategories();
renderProducts();

searchInput.addEventListener("input", renderProducts);
categoryFilter.addEventListener("change", renderProducts);
sortSelect.addEventListener("change", renderProducts);
budgetButton.addEventListener("click", showBudgetRecommendation);
