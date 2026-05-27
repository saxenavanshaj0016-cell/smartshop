#include <algorithm>
#include <iostream>
#include <limits>
#include <string>
#include <vector>

using namespace std;

struct Product {
    string name;
    string brand;
    string category;
    double rating;
    int stock;
    int price;
    int discount;
    string platform;
};

void merge(vector<Product>& products, int left, int mid, int right) {
    vector<Product> leftPart(products.begin() + left, products.begin() + mid + 1);
    vector<Product> rightPart(products.begin() + mid + 1, products.begin() + right + 1);

    int i = 0;
    int j = 0;
    int k = left;

    while (i < static_cast<int>(leftPart.size()) && j < static_cast<int>(rightPart.size())) {
        if (leftPart[i].price <= rightPart[j].price) {
            products[k++] = leftPart[i++];
        } else {
            products[k++] = rightPart[j++];
        }
    }

    while (i < static_cast<int>(leftPart.size())) {
        products[k++] = leftPart[i++];
    }

    while (j < static_cast<int>(rightPart.size())) {
        products[k++] = rightPart[j++];
    }
}

void mergeSort(vector<Product>& products, int left, int right) {
    if (left >= right) {
        return;
    }

    int mid = left + (right - left) / 2;
    mergeSort(products, left, mid);
    mergeSort(products, mid + 1, right);
    merge(products, left, mid, right);
}

int binarySearchByName(const vector<Product>& products, const string& target) {
    int left = 0;
    int right = static_cast<int>(products.size()) - 1;

    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (products[mid].name == target) {
            return mid;
        }
        if (products[mid].name < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

Product recommendBestWithinBudget(const vector<Product>& products, int budget) {
    Product best = {"No matching product", "-", "-", 0.0, 0, -1, 0, "-"};

    for (const auto& product : products) {
        if (product.price <= budget) {
            if (product.rating > best.rating || (product.rating == best.rating && product.price > best.price)) {
                best = product;
            }
        }
    }

    return best;
}

void printProducts(const vector<Product>& products) {
    cout << "\nAvailable Products:\n";
    for (const auto& product : products) {
        cout << "- " << product.name
             << " | Brand: " << product.brand
             << " | Category: " << product.category
             << " | Rating: " << product.rating
             << " | Stock: " << product.stock
             << " | Price: Rs. " << product.price
             << " | Discount: " << product.discount << "%"
             << " | Platform: " << product.platform << '\n';
    }
}

void printCategorySummary(const vector<Product>& products) {
    vector<string> categories;

    for (const auto& product : products) {
        if (find(categories.begin(), categories.end(), product.category) == categories.end()) {
            categories.push_back(product.category);
        }
    }

    cout << "\nCategories Available:\n";
    for (const auto& category : categories) {
        cout << "- " << category << '\n';
    }
}

int main() {
    vector<Product> products = {
        {"Samsung Galaxy M14", "Samsung", "Electronics", 4.4, 18, 12499, 10, "Flipkart"},
        {"Realme Narzo 60", "Realme", "Electronics", 4.3, 22, 15499, 10, "Flipkart"},
        {"Redmi Note 13", "Xiaomi", "Electronics", 4.5, 15, 16999, 11, "Flipkart"},
        {"Boat Rockerz 450", "Boat", "Electronics", 4.0, 20, 1399, 13, "Flipkart"},
        {"JBL Go 3", "JBL", "Electronics", 4.6, 12, 2799, 12, "Amazon"},
        {"HP Wireless Mouse", "HP", "Accessories", 4.2, 30, 749, 8, "Flipkart"},
        {"Logitech K380 Keyboard", "Logitech", "Accessories", 4.7, 14, 2999, 10, "Amazon"},
        {"Sandisk 128GB Pendrive", "Sandisk", "Accessories", 4.4, 34, 899, 14, "Amazon"},
        {"Noise Smart Watch", "Noise", "Wearables", 4.1, 25, 2299, 15, "Flipkart"},
        {"Fire-Boltt Ninja Call", "Fire-Boltt", "Wearables", 4.0, 19, 1899, 18, "Flipkart"},
        {"Titan Smart Band", "Titan", "Wearables", 4.5, 16, 3399, 11, "Flipkart"},
        {"Puma Running Shoes", "Puma", "Fashion", 4.3, 14, 2899, 18, "Myntra"},
        {"Levis Denim Jacket", "Levis", "Fashion", 4.6, 11, 3299, 16, "Myntra"},
        {"Nike Sports T-Shirt", "Nike", "Fashion", 4.4, 26, 1399, 14, "Myntra"},
        {"Adidas Duffel Bag", "Adidas", "Fashion", 4.5, 18, 1799, 13, "Flipkart"},
        {"Milton Water Bottle", "Milton", "Home", 4.5, 40, 549, 6, "Flipkart"},
        {"Prestige Induction Cooktop", "Prestige", "Home", 4.3, 13, 2399, 17, "Flipkart"},
        {"Philips Steam Iron", "Philips", "Home", 4.4, 17, 1849, 13, "Flipkart"},
        {"Mamaearth Face Wash", "Mamaearth", "Beauty", 4.2, 28, 239, 10, "Nykaa"},
        {"Lakme Lip Color", "Lakme", "Beauty", 4.1, 32, 459, 10, "Nykaa"},
        {"Maybelline Mascara", "Maybelline", "Beauty", 4.6, 21, 649, 12, "Nykaa"},
        {"Nivea Body Lotion", "Nivea", "Beauty", 4.4, 29, 339, 12, "Nykaa"},
        {"The Alchemist", "HarperCollins", "Books", 4.8, 44, 289, 22, "Flipkart"},
        {"Atomic Habits", "Penguin", "Books", 4.9, 38, 479, 21, "Flipkart"}
    };

    vector<Product> productsByName = products;
    sort(productsByName.begin(), productsByName.end(), [](const Product& a, const Product& b) {
        return a.name < b.name;
    });

    int choice = 0;

    while (choice != 5) {
        cout << "\nSmart Shopping Comparison and Budget Optimizer\n";
        cout << "1. View products sorted by price\n";
        cout << "2. Search product by name\n";
        cout << "3. Find best product within budget\n";
        cout << "4. View category summary\n";
        cout << "5. Exit\n";
        cout << "Enter your choice: ";
        cin >> choice;

        if (cin.fail()) {
            cin.clear();
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
            cout << "Invalid input. Please enter a number.\n";
            continue;
        }

        if (choice == 1) {
            vector<Product> sortedProducts = products;
            mergeSort(sortedProducts, 0, static_cast<int>(sortedProducts.size()) - 1);
            printProducts(sortedProducts);
        } else if (choice == 2) {
            cin.ignore(numeric_limits<streamsize>::max(), '\n');
            string target;
            cout << "Enter product name: ";
            getline(cin, target);
            int index = binarySearchByName(productsByName, target);
            if (index == -1) {
                cout << "Product not found.\n";
            } else {
                const Product& product = productsByName[index];
                cout << "Found: " << product.name
                     << " | Brand: " << product.brand
                     << " | Category: " << product.category
                     << " | Rating: " << product.rating
                     << " | Stock: " << product.stock
                     << " | Price: Rs. " << product.price
                     << " | Discount: " << product.discount << "%"
                     << " | Platform: " << product.platform << '\n';
            }
        } else if (choice == 3) {
            int budget;
            cout << "Enter your budget: ";
            cin >> budget;
            Product recommendation = recommendBestWithinBudget(products, budget);
            if (recommendation.price == -1) {
                cout << "No product found within this budget.\n";
            } else {
                cout << "Recommended Product: " << recommendation.name
                     << " | Brand: " << recommendation.brand
                     << " | Category: " << recommendation.category
                     << " | Rating: " << recommendation.rating
                     << " | Price: Rs. " << recommendation.price
                     << " | Platform: " << recommendation.platform << '\n';
            }
        } else if (choice == 4) {
            printCategorySummary(products);
        } else if (choice == 5) {
            cout << "Exiting application.\n";
        } else {
            cout << "Invalid choice. Try again.\n";
        }
    }

    return 0;
}
