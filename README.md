# Smart Shopping Comparison and Budget Optimizer

This project is a starter implementation for the **Bug Squashers** team project.

It includes:

- A frontend web application built with HTML, CSS, and JavaScript
- A C++ backend logic module for searching, sorting, and budget optimization
- SQLite database scripts for storing products and platform prices
- Project documentation for report, demo, and viva preparation

## Project Objective

The system helps users:

- Search for products
- Compare prices across shopping platforms
- Sort products by price
- Find items within a selected budget
- Make better shopping decisions without overspending

## Team Roles

- **Rudraksh**: Frontend development using HTML, CSS, and JavaScript
- **Ghanshyam**: Database design and management using SQLite
- **Vanshaj**: Backend logic development in C++

## Project Structure

- `frontend/` - website UI and browser logic
- `backend-cpp/` - C++ implementation of search, sorting, and budget recommendation
- `database/` - SQLite schema and sample data
- `docs/` - project summary, module details, and viva support

## How To Run The Frontend

1. Open [frontend/index.html](/C:/Users/saxen/OneDrive/Desktop/smartshop/frontend/index.html) in a browser.
2. Use the search bar, filters, sorting, and budget section.

No server is required for the static demo.

## How To Run The C++ Module

Compile:

```powershell
g++ .\backend-cpp\main.cpp -o .\backend-cpp\smartshop.exe
```

Run:

```powershell
.\backend-cpp\smartshop.exe
```

## Database

Use the scripts in `database/`:

- [schema.sql](/C:/Users/saxen/OneDrive/Desktop/smartshop/database/schema.sql)
- [sample_data.sql](/C:/Users/saxen/OneDrive/Desktop/smartshop/database/sample_data.sql)

These scripts create sample tables and insert demo records.
