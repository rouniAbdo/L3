// A class that represents a product.
export class Product {
  #name
  #price
  #quantity
  #vatRate
  constructor(){
    this.#name = ''
    this.#price = 0
    this.#quantity = 0
    this.#vatRate = 0
  }
 /**
  * Purpose: to get the name of the product
  */
  getProductName(){
    return this.#name
  }
 /**
  * Purpose: to get the price of the product.
  */
  getProductPrice(){
    return this.#price
  }
 /**
  * Purpose: to get the quantity of the product.
  */
  getProductQuantity(){
    return this.#quantity
  }
  /**
   * Purpose: to get the VAT rate of the product.
   */
  getProductVatRate(){
    return this.#vatRate
  }
  /**
   * Purpose: to set the name of the product and validate.
   */
  setProductName(name){
    if(typeof name !== 'string' || name.trim() === ''){
      throw new Error('Name cannot be empty and must be a string')
    }
    this.#name = name
  }
  /**
   * Purpose: to set the price of the product and validate.
   */
  setProductPrice(price){
    if(typeof price !== 'number' || isNaN(price)){
      throw new Error('Price must be a number.')
    }
    this.#price = price
  }
 /**
  * Purpose: to set the quantity of the product and validate.
  */
  setProductQuantity(quantity){
    if(typeof quantity !== 'number' || isNaN(quantity)){
      throw new Error('Quantity must be a number.')
    }
    this.#quantity = quantity
  }
/**
 * Purpose: to set the VAT rate of the product and validate.
 */
  setProductVatRate(vatRate){
    if(typeof vatRate !== 'number' || isNaN(vatRate)){
      throw new Error('VAT rate must be a number.')
    }
    this.#vatRate = vatRate
  }
  /**
   * Purpose: to get the product information.
   */
  getProductInfo(){
    return {
      name: this.#name,
      price: this.#price,
      quantity: this.#quantity,
      VatRate: this.#vatRate
    }
  }
}
