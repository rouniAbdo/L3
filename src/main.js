import { ProductManagement  } from '../module/productManagement'
const productManager = new ProductManagement ()


productManager.addProduct('Produkt A', 100, 1, 0.25)
productManager.addProduct('Produkt B', 200, 2, 0.25)

productManager.updateProduct('Produkt A', { price: 1, quantity: 1 })
productManager.addProduct('Smartphone', 8000, 3, 0.25)
const removedProduct = productManager.removeProduct('Produkt B', { price: 1, quantity: 1 })
console.log('Removed product:', removedProduct)
const totalPrice = productManager.calculateTotalPrice()
console.log('Totalt pris:', totalPrice)