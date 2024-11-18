// Purpose: to calculate the total price of a product or a list of products
import { Product } from './product.js'

export class PriceCalculator  {
  constructor(){
    this.product = new Product()
  }
 /**
  * Purpose: to calculate the price of a single product.
  */
  calculateSingleProductPrice(product){
    if(product.length === 0){
      return ('there are no products')
    }
    const price = product.getProductPrice()
    const quantity = product.getProductQuantity()
    const vatRate = product.getProductVatRate()
    const totalPrice = price * quantity * (vatRate / 100 + 1)
    return totalPrice
  }
 /**
  * Purpose: to calculate the total price of a list of products.
  */
  calculateTotalPrice(products){
    if ( !Array.isArray(products) || products.length === 0){
      return 0
    }
    let totalPrice = 0
    products.forEach(product => {
      totalPrice += this.calculateSingleProductPrice(product)
    })
    return totalPrice
  }
}
