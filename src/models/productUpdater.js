// Purpose: to update the product details.
import { Product } from './product.js'

export class ProductUpdater  {
  constructor(Product){
    this.Product = Product
  }
  /**
   * Purpose: to update the name of the product.
   */
  updateName(name){
    this.Product.setProductName(name)
  }
  /**
   * Purpose: to update the price of the product.
   */
  updatePrice(price){
    this.Product.setProductPrice(price)
  }
  /**
   * Purpose: to update the quantity of the product.
   */
  updateQuantity(quantity){
    this.Product.setProductQuantity(quantity)
  }
  /**
   * Purpose: to update the VAT rate of the product.
   */
  updateVatRate(vatRate){
    this.Product.setProductVatRate(vatRate)
  }
}
