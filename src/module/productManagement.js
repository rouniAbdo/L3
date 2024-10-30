import { Product } from './product.js'
import { PriceCalculator } from './priceCalculator.js'
import { ProductUpdater } from './productUpdater.js'
/**
 * Purpose: to manage the products.
 */
export class ProductManagement {

  constructor () {
    this.products = []
    this.priceCalculator = new PriceCalculator()
  }
/**
 * Purpose: to add a product to the list of products.
 */
  addProduct (name, price, quantity, vatRate) {
    if (this.findProductByName(name))
      return 'Product already exists'
    const product = new Product()
    product.setProductName(name)
    product.setProductPrice(price)
    product.setProductQuantity(quantity)
    product.setProductVatRate(vatRate)
    this.products.push(product)
  }
/**
 * Purpose: to find a product by name.
 */
  findProductByName (name) {
    return this.products.find(product => product.getProductName() === name)
  }
/**
 * Purpose: to update the product details.
 */

updateProduct(name, updatedInfo) {
  const product = this.findProductByName(name)
  if (!product) return 'Product not found'

  const updater = new ProductUpdater(product)
  const updateActions = {
      name: updater.updateName.bind(updater),
      price: updater.updatePrice.bind(updater),
      quantity: updater.updateQuantity.bind(updater),
      vatRate: updater.updateVatRate.bind(updater),
  };

  for (const [key, value] of Object.entries(updatedInfo)) {
      if (updateActions[key] && value !== undefined) {
          updateActions[key](value)
      }
  }
}
/**
 * Purpose: to calculate the total price of all products.
 */
  calculateTotalPrice() {
    return this.priceCalculator.calculateTotalPrice(this.products)
}
/**
 * Purpose: to remove a product from the list of products.
 */
removeProduct(name) {
  const index = this.products.findIndex(product => product.getProductName() === name)
  if (index === -1) {
    return 'Product not found'
  }
  
  this.products.splice(index, 1)
  return name
}
}
