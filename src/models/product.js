// A class that represents a product.
/**
 *
 */
export class Product {
  #name
  #price
  #quantity
  #vatRate
  /**
   * To initialize the product.
   */
  constructor () {
    this.#name = ''
    this.#price = 0
    this.#quantity = 0
    this.#vatRate = 0
  }

  /**
   * To get the name of the product.
   *
   * @returns {string} - The name of the product.
   */
  getProductName () {
    return this.#name
  }

  /**
   * To get the price of the product.
   *
   * @returns {number} - The price of the product.
   */
  getProductPrice () {
    return this.#price
  }

  /**
   * To get the quantity of the product.
   *
   * @returns {number} - The quantity of the product.
   */
  getProductQuantity () {
    return this.#quantity
  }

  /**
   * To get the VAT rate of the product.
   *
   * @returns {number} - The VAT rate of the product.
   */
  getProductVatRate () {
    return this.#vatRate
  }

  /**
   * To set the name of the product and validate.
   *
   * @param {string} name - The name of the product.
   */
  setProductName (name) {
    if (typeof name !== 'string' || name.trim() === '') {
      throw new Error('Name cannot be empty and must be a string')
    }
    this.#name = name
  }

  /**
   * To set the price of the product and validate.
   *
   * @param {number} price - The price of the product.
   */
  setProductPrice (price) {
    if (typeof price !== 'number' || isNaN(price)) {
      throw new Error('Price must be a number.')
    }
    this.#price = price
  }

  /**
   * To set the quantity of the product and validate.
   *
   * @param {number} quantity - The quantity of the product.
   */
  setProductQuantity (quantity) {
    if (typeof quantity !== 'number' || isNaN(quantity)) {
      throw new Error('Quantity must be a number.')
    }
    this.#quantity = quantity
  }

  /**
   * To set the VAT rate of the product and validate.
   *
   * @param {number} vatRate - The VAT rate of the product.
   */
  setProductVatRate (vatRate) {
    if (typeof vatRate !== 'number' || isNaN(vatRate)) {
      throw new Error('VAT rate must be a number.')
    }
    this.#vatRate = vatRate
  }

  /**
   * To get the product information.
   *
   * @returns {object} - The product information.
   */
  getProductInfo () {
    return {
      name: this.#name,
      price: this.#price,
      quantity: this.#quantity,
      VatRate: this.#vatRate
    }
  }
}
