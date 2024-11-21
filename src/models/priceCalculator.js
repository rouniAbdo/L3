// to calculate the total price of a product or a list of products
import { Product } from './product.js'

/**
 * To calculate the price of a product or a list of products.
 */
export class PriceCalculator {
  /**
   * To initialize the price calculator.
   */
  constructor () {
    this.product = new Product()
  }

  /**
   * To calculate the price of a single product.
   *
   * @param {object} product - The product for which the price will be calculated.
   * @returns {number} - The price of the product.
   */
  calculateSingleProductPrice (product) {
    if (product.length === 0) {
      return ('there are no products')
    }
    const price = product.getProductPrice()
    const quantity = product.getProductQuantity()
    const vatRate = product.getProductVatRate()
    const totalPrice = price * quantity * (vatRate / 100 + 1)
    return totalPrice
  }

  /**
   * To calculate the total price of a list of products.
   *
   * @param {Array} products - The list of products for which the total price will be calculated.
   * @returns {number} - The total price of the products.
   */
  calculateTotalPrice (products) {
    if (!Array.isArray(products) || products.length === 0) {
      return 0
    }
    let totalPrice = 0
    products.forEach(product => {
      totalPrice += this.calculateSingleProductPrice(product)
    })
    return totalPrice
  }
}
