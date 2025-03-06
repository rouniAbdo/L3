/**
 * To update the product details.
 */
export class ProductUpdater {
  /**
   * To initialize the product updater.
   *
   * @param {object} Product - The product to be updated.
   */
  constructor (Product) {
    this.Product = Product
  }

  /**
   * To update the name of the product.
   *
   * @param {string} name - The new name of the product.
   */
  updateName (name) {
    this.Product.setProductName(name)
  }

  /**
   * To update the price of the product.
   *
   * @param {number} price - The new price of the product.
   */
  updatePrice (price) {
    this.Product.setProductPrice(price)
  }

  /**
   * To update the quantity of the product.
   *
   * @param {number} quantity - The new quantity of the product.
   */
  updateQuantity (quantity) {
    this.Product.setProductQuantity(quantity)
  }

  /**
   * To update the VAT rate of the product.
   *
   * @param {number} vatRate - The new VAT rate of the product.
   */
  updateVatRate (vatRate) {
    this.Product.setProductVatRate(vatRate)
  }
}
