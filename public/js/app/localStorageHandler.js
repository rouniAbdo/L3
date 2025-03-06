export class LocalStorageHandler {
    constructor(productManagement) {
      this.productManagement = productManagement
      this.localStorageKey = 'products'
    }
  
    /**
     * This will help to load the products from localStorage.
     */
    loadFromLocalStorage() {
      const productsJson = localStorage.getItem(this.localStorageKey)
      if (productsJson) {
        const products = JSON.parse(productsJson)
        products.forEach(({ name, price, quantity, vatRate }) => {
          this.productManagement.addProduct(name, price, quantity, vatRate)
        })
      }
    }
  
    /**
     * Importent to save the product list to localStorage.
     */
    saveToLocalStorage() {
      const products = this.productManagement.products.map(product => ({
        name: product.getProductName(),
        price: product.getProductPrice(),
        quantity: product.getProductQuantity(),
        vatRate: product.getProductVatRate()
      }))
      localStorage.setItem(this.localStorageKey, JSON.stringify(products))
    }
  }
  