# VAT Calculation Library


## Description
The VAT Calculation Library is a JavaScript tool that helps people calculate Value Added Tax (VAT) for different items. It allows users to create item objects, change their details, and find out the total price, including VAT. The library has different classes that work together to handle items, VAT rates, and the calculations needed.

#### Key Features:

- Create and manage items with their names, prices, quantities, and VAT rates.
- Update product details such as price, quantity, name, and VAT rate.
- Calculate VAT for each item and the total price, including VAT.
- Easily use it in JavaScript projects.
## Installation
To use the VAT Calculation Library in your project, follow these steps:
1. **Clone the Repository:**
```bash
 git clone git@github.com:rouniAbdo/L2.git
 ```
2. **Install Dependencies**
```bash
 npm install
 ```
3. **Import the Library:**
```javascript
import { ProductManagement } from './utils/productManagement.js'
```

## Usage

## step 1: **Initialize Product Management**
Create an instance of the ProductManagement class:
```javascript
const productManagement = new ProductManagement()
```
## step 2: **Add products**
You can add products to the list using the `addProduct` method:
```javascript
productManagement.addProduct('Product A', 100, 2, 25)
```
## step 3: **Calculate Total Price Including VAT**
To get the total price of all items including VAT, use the `calculateTotalPrice()` method:
```javascript 
const totalPrice = productManagement.calculateTotalPrice()
```
## step 4: **Update product Details**
You can update an product’s properties by specifying its name and the new values, using the `updateProduct` method:
```javascript
productManagement.updateProduct('Product A', { price: 150, quantity: 5 })
```
## step 5: Find a Product by Name
Retrieve a specific product by its name using the `findProductByName` method:

```javascript
const product = productManagement.findProductByName('Product A')
```
## step 6: **Remove a Product** 
To remove a product from the list, use the `removeProduct` method:
```
productManagement.removeProduct('Product A')
```

## License
This project is licensed under the MIT License - see the [LICENSE](./docs/LICENSE) file for details