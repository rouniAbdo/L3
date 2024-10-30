# Test Report for the Project

## Overview
This report summarizes the results of unit tests for the classes `Product`, `ProductUpdater`, `PriceCalculator`, and `ProductManagement` in the project.

## Test Environment
- **Testing Tool**: Jest
- **Programming Language**: JavaScript
- **Classes**: Product, ProductUpdater, PriceCalculator, ProductManagement

## Test Cases and Results

### 1. Product [test](./images/item.png)
| Test Case                                         | Expected Result                                                   | Status   |
|--------------------------------------------------|------------------------------------------------------------------|----------|
|1.1. Create Product with valid values |	Correctly creates Product with specified name, price, VAT rate, and quantity.|	Pass|
|1.2. Error for empty product name	|Product name is empty.|	Pass|
|1.3. Error for invalid price|	Product price is not a valid number.|	Pass|
|1.4. Error for invalid VAT rate|	Invalid VAT rate key.|	Pass|
|1.5. Error for invalid quantity|	Product quantity is not a valid number.|	Pass|
|1.6. Error for quantity less than 1 |	Product quantity is not a valid number.|	Pass|
|1.7. Error for negative price	|Product price is not a valid number.|	Pass|

### 2. ProductUpdater [test](./images/updateItem.png)

| Test Case                                         | Expected Result                                                   | Status   |
|--------------------------------------------------|------------------------------------------------------------------|----------|
| 2.1. Update the name of a product	|Successfully updates the product's name to "New Name".|	Pass|
|2.2. Update the price of a product	|Successfully updates the product's price to 200.	|Pass|
|2.3. Update the quantity of a product|	Successfully updates the product's quantity to 2.	|Pass|
|2.4. Update the VAT rate of a product|	Successfully updates the product's VAT rate to 0.12 (reduced).|	Pass|

### 3. PriceCalculator [test](./images/vatCalculator.png)
| Test Case                                         | Expected Result                                                   | Status   |
|--------------------------------------------------|------------------------------------------------------------------|----------|
| 3.1. Calculate price of a single product | Correctly calculates the price for a single product as expected.	|Pass|
|3.2. Calculate total price including VAT for all products|	Correctly calculates total price including VAT for multiple products as expected.|	Pass|
|3.3. Return error message for empty product list|Returns correct message when no products are provided.	|Pass|

### 4. ProductManagement [test](./images/vatManagement.png)

| Test Case                                         | Expected Result                                                   | Status   |
|--------------------------------------------------|------------------------------------------------------------------|----------|
| 4.1. Add a product and return success message	| Returns success message: "Product added successfully."|	Pass|
|4.2. Return an error message for duplicate product	|Returns error message: "Product already exists."	|Pass|
|4.3. Remove a product and return success message	|Returns success message: "Product removed successfully."	|Pass|
|4.4. Update product details|	Updates product properties and returns success message for updated product.	|Pass|
|4.5. Return error message for non-existent product|	Returns error message: "Product not found."	|Pass|

## Summary
All tests for the classes `Product`, `ProductUpdater`, `PriceCalculator`, and `ProductManagement` were successfully executed and returning expected results.

## Test Report Date
- **Date**: 2024-10-01
