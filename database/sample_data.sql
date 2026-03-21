INSERT INTO users (name, email, city, preferred_category, budget) VALUES
('Aman', 'aman@email.com', 'Delhi', 'Electronics', 3000),
('Priya', 'priya@email.com', 'Mumbai', 'Fashion', 15000),
('Rohit', 'rohit@email.com', 'Jaipur', 'Accessories', 5000);

INSERT INTO products (product_name, brand, category, description, average_rating, stock_quantity) VALUES
('Samsung Galaxy M14', 'Samsung', 'Electronics', '5G smartphone with large battery and fast performance', 4.4, 18),
('Noise Smart Watch', 'Noise', 'Wearables', 'Affordable smartwatch with fitness tracking features', 4.1, 25),
('Puma Running Shoes', 'Puma', 'Fashion', 'Comfortable running shoes for daily training', 4.3, 14),
('HP Wireless Mouse', 'HP', 'Accessories', 'Compact wireless mouse for home and office use', 4.2, 30),
('Boat Rockerz 450', 'Boat', 'Electronics', 'Wireless headphones with deep bass sound', 4.0, 20),
('Milton Water Bottle', 'Milton', 'Home', 'Durable water bottle for regular daily use', 4.5, 40);

INSERT INTO platform_prices (
    product_id,
    platform_name,
    price,
    delivery_charge,
    discount_percent,
    availability_status,
    seller_name,
    product_url
) VALUES
(1, 'Amazon', 12999, 40, 8, 'In Stock', 'Amazon Retail', 'https://example.com/amazon-galaxy-m14'),
(1, 'Flipkart', 12499, 0, 10, 'In Stock', 'Flipkart Seller', 'https://example.com/flipkart-galaxy-m14'),
(1, 'Croma', 13150, 60, 5, 'Limited Stock', 'Croma Store', 'https://example.com/croma-galaxy-m14'),
(2, 'Amazon', 2499, 40, 12, 'In Stock', 'Amazon Retail', 'https://example.com/amazon-noise-watch'),
(2, 'Flipkart', 2299, 0, 15, 'In Stock', 'Smart Hub', 'https://example.com/flipkart-noise-watch'),
(2, 'Myntra', 2599, 50, 9, 'In Stock', 'Myntra Fashion', 'https://example.com/myntra-noise-watch'),
(3, 'Amazon', 3199, 70, 10, 'In Stock', 'Amazon Retail', 'https://example.com/amazon-puma-shoes'),
(3, 'Flipkart', 2999, 40, 14, 'In Stock', 'Shoe Plaza', 'https://example.com/flipkart-puma-shoes'),
(3, 'Myntra', 2899, 0, 18, 'In Stock', 'Puma Official', 'https://example.com/myntra-puma-shoes'),
(4, 'Amazon', 799, 30, 6, 'In Stock', 'HP Store', 'https://example.com/amazon-hp-mouse'),
(4, 'Flipkart', 749, 0, 8, 'In Stock', 'Tech Deals', 'https://example.com/flipkart-hp-mouse'),
(4, 'Reliance', 820, 20, 5, 'In Stock', 'Reliance Digital', 'https://example.com/reliance-hp-mouse'),
(5, 'Amazon', 1499, 20, 11, 'In Stock', 'Boat Official', 'https://example.com/amazon-boat-rockerz'),
(5, 'Flipkart', 1399, 0, 13, 'In Stock', 'Audio World', 'https://example.com/flipkart-boat-rockerz'),
(5, 'Croma', 1599, 35, 7, 'Limited Stock', 'Croma Store', 'https://example.com/croma-boat-rockerz'),
(6, 'Amazon', 599, 25, 4, 'In Stock', 'Home Essentials', 'https://example.com/amazon-milton-bottle'),
(6, 'Flipkart', 549, 0, 6, 'In Stock', 'Kitchen Mart', 'https://example.com/flipkart-milton-bottle'),
(6, 'JioMart', 575, 15, 5, 'In Stock', 'JioMart Seller', 'https://example.com/jiomart-milton-bottle');
