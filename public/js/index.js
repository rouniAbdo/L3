import { ProductApp } from './app/productApp.js'
// Initialize the ProductApp class when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const app = new ProductApp()
  app.initializeApp()
})
