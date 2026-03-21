DROP TABLE IF EXISTS platform_prices;
DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS users;

CREATE TABLE users (
    user_id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE,
    city TEXT,
    preferred_category TEXT,
    budget INTEGER NOT NULL CHECK (budget >= 0),
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    product_id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_name TEXT NOT NULL,
    brand TEXT NOT NULL,
    category TEXT NOT NULL,
    description TEXT,
    average_rating REAL DEFAULT 0 CHECK (average_rating >= 0 AND average_rating <= 5),
    stock_quantity INTEGER DEFAULT 0 CHECK (stock_quantity >= 0)
);

CREATE TABLE platform_prices (
    price_id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER NOT NULL,
    platform_name TEXT NOT NULL,
    price INTEGER NOT NULL CHECK (price >= 0),
    delivery_charge INTEGER DEFAULT 0 CHECK (delivery_charge >= 0),
    discount_percent REAL DEFAULT 0 CHECK (discount_percent >= 0 AND discount_percent <= 100),
    availability_status TEXT DEFAULT 'In Stock',
    seller_name TEXT,
    last_updated TEXT DEFAULT CURRENT_TIMESTAMP,
    product_url TEXT,
    FOREIGN KEY (product_id) REFERENCES products(product_id)
);
