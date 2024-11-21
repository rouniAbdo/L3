import { Product } from '../models/product.js'
import { PriceCalculator } from '../models/priceCalculator.js'
import { ProductUpdater } from '../models/productUpdater.js'
/**
 * To manage the products.
 */
export class ProductManagement {
  /**
   * To initialize the product management.
   */
  constructor () {
    this.products = []
    this.priceCalculator = new PriceCalculator()
  }

  /**
   * To add a product to the list of products.
   *
   * @param {string} name - The name of the product.
   * @param {number} price - The price of the product.
   * @param {number} quantity - The quantity of the product.
   * @param {number} vatRate - The VAT rate of the product.
   * @returns {string} - The message indicating the status of the addition
   */
  addProduct (name, price, quantity, vatRate) {
    if (this.findProductByName(name)) { return 'Product already exists' }
    const product = new Product()
    product.setProductName(name)
    product.setProductPrice(price)
    product.setProductQuantity(quantity)
    product.setProductVatRate(vatRate)
    this.products.push(product)
  }

  /**
   * To find a product by name.
   *
   * @param {string} name - The name of the product to find.
   * @returns {object} - The product with the given name.
   */
  findProductByName (name) {
    return this.products.find(product => product.getProductName() === name)
  }

  /**
   * To update the product details.
   *
   * @param {string} name - The name of the product to update.
   * @param {object} updatedInfo - The updated information.
   * @returns {string} - The message indicating the status of the update.
   */
  updateProduct (name, updatedInfo) {
    const product = this.findProductByName(name)
    if (!product) return 'Product not found'

    const updater = new ProductUpdater(product)
    const updateActions = {
      name: updater.updateName.bind(updater),
      price: updater.updatePrice.bind(updater),
      quantity: updater.updateQuantity.bind(updater),
      vatRate: updater.updateVatRate.bind(updater)
    }

    for (const [key, value] of Object.entries(updatedInfo)) {
      if (updateActions[key] && value !== undefined) {
        updateActions[key](value)
      }
    }
  }

  /**
   * To calculate the total price of all products.
   *
   * @returns {number} - The total price of all products.
   */
  calculateTotalPrice () {
    return this.priceCalculator.calculateTotalPrice(this.products)
  }

  /**
   * To remove a product from the list of products.
   *
   * @param {string} name - The name of the product to remove.
   * @returns {string} - The name of the removed product.
   */
  removeProduct (name) {
    const index = this.products.findIndex(product => product.getProductName() === name)
    if (index === -1) {
      return 'Product not found'
    }

    this.products.splice(index, 1)
    return name
  }
}
