#include <algorithm>
#include <iostream>
#include <limits>
#include <string>
#include <vector>

using namespace std;

struct Product {
    string name;
    string category;
    int price;
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
    Product best = {"No matching product", "-", -1, "-"};

    for (const auto& product : products) {
        if (product.price <= budget && product.price > best.price) {
            best = product;
        }
    }

    return best;
}

void printProducts(const vector<Product>& products) {
    cout << "\nAvailable Products:\n";
    for (const auto& product : products) {
        cout << "- " << product.name
             << " | Category: " << product.category
             << " | Price: Rs. " << product.price
             << " | Platform: " << product.platform << '\n';
    }
}

int main() {
    vector<Product> products = {
        {"Samsung Galaxy M14", "Electronics", 12499, "Flipkart"},
        {"Noise Smart Watch", "Wearables", 2299, "Flipkart"},
        {"Puma Running Shoes", "Fashion", 2899, "Myntra"},
        {"HP Wireless Mouse", "Accessories", 749, "Flipkart"},
        {"Boat Rockerz 450", "Electronics", 1399, "Flipkart"},
        {"Milton Water Bottle", "Home", 549, "JioMart"}
    };

    vector<Product> productsByName = products;
    sort(productsByName.begin(), productsByName.end(), [](const Product& a, const Product& b) {
        return a.name < b.name;
    });

    int choice = 0;
    while (choice != 4) {
        cout << "\nSmart Shopping Comparison and Budget Optimizer\n";
        cout << "1. View products sorted by price\n";
        cout << "2. Search product by name\n";
        cout << "3. Find best product within budget\n";
        cout << "4. Exit\n";
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
                     << " | Category: " << product.category
                     << " | Price: Rs. " << product.price
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
                     << " | Price: Rs. " << recommendation.price
                     << " | Platform: " << recommendation.platform << '\n';
            }
        } else if (choice == 4) {
            cout << "Exiting application.\n";
        } else {
            cout << "Invalid choice. Try again.\n";
        }
    }

    return 0;
}
