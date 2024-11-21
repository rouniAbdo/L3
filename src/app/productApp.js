import { ProductManagement } from '../utils/productManagement.js'
import { ProductEditor } from './productEditor.js'
import { ProductListView } from './productListView.js'
import { ProductFormHandler } from './ProductFormHandler.js'
import { LocalStorageHandler } from './localStorageHandler.js'

export class ProductApp {
  constructor() {
    this.productManagement = new ProductManagement()
    this.localStorageHandler = new LocalStorageHandler(this.productManagement)
    this.localStorageKey = 'products'

    this.productEditor = new ProductEditor(this.productManagement)
    this.productListView = new ProductListView(this.productManagement, this.productEditor)
    this.productEditor.productListView = this.productListView
    this.productFormHandler = new ProductFormHandler(this.productManagement, this.productListView)
  }

  /**
   * This method is called to initialize the app after the DOM has loaded.
   */
  initializeApp() {
    // Load products from localStorage if they exist
    this.localStorageHandler.loadFromLocalStorage()

    // Update the view with the current products
    this.productListView.updateView()

    // Hook methods to save to localStorage when changes occur
    this.hookProductManagementMethods()
  }

  /**
   * Hooks methods to save to localStorage when products are changed.
   */
  hookProductManagementMethods() {
    ['addProduct', 'removeProduct', 'updateProduct'].forEach(method => {
      const originalMethod = this.productManagement[method].bind(this.productManagement)
      this.productManagement[method] = (...args) => {
        const result = originalMethod(...args)

        this.localStorageHandler.saveToLocalStorage()
        return result
      }
    })
  }
}
