import { ProductManagement } from '../src/utils/productManagement'
describe('ProductManagement', () => {
  let productManagement

  beforeEach(() => {
    productManagement = new ProductManagement()
  })

  test('should add a new product', () => {
    const result = productManagement.addProduct('Laptop', 1000, 2, 0.25)
    expect(productManagement.products.length).toBe(1)
    expect(productManagement.products[0].getProductName()).toBe('Laptop')
    expect(productManagement.products[0].getProductPrice()).toBe(1000)
    expect(productManagement.products[0].getProductQuantity()).toBe(2)
    expect(productManagement.products[0].getProductVatRate()).toBe(0.25)
  })

  test('should not add a product if it already exists', () => {
    productManagement.addProduct('Laptop', 1000, 2, 0.25)
    const result = productManagement.addProduct('Laptop', 1000, 2, 0.25)
    expect(result).toBe('Product already exists')
    expect(productManagement.products.length).toBe(1)
  })

  test('should find a product by name', () => {
    productManagement.addProduct('Laptop', 1000, 2, 0.25)
    const product = productManagement.findProductByName('Laptop')
    expect(product).toBeTruthy()
    expect(product.getProductName()).toBe('Laptop')
  })

  test('should return undefined when product is not found', () => {
    const product = productManagement.findProductByName('Nonexistent')
    expect(product).toBeUndefined()
  })

  test('should update product details', () => {
    productManagement.addProduct('Laptop', 1000, 2, 0.25);
    const updatedInfo = {
      price: 1200,
      quantity: 3
    }
    productManagement.updateProduct('Laptop', updatedInfo)
    expect(productManagement.products[0].getProductPrice()).toBe(1200)
    expect(productManagement.products[0].getProductQuantity()).toBe(3)
  })

  test('should return "Product not found" when updating a non-existent product', () => {
    const result = productManagement.updateProduct('Nonexistent', { price: 1200 })
    expect(result).toBe('Product not found')
  })

  test('should calculate total price of products', () => {
    productManagement.addProduct('Laptop', 1000, 2, 0.25)
    productManagement.addProduct('Tablet', 500, 1, 0.12)
    const totalPrice = productManagement.calculateTotalPrice()
    expect(totalPrice).toBe(3060)
  })

  test('should remove a product from the list', () => {
    productManagement.addProduct('Laptop', 1000, 2, 0.25)
    const result = productManagement.removeProduct('Laptop')
    expect(result).toBe('Laptop')
    expect(productManagement.products.length).toBe(0)
  })

  test('should return "Product not found" when trying to remove a non-existent product', () => {
    const result = productManagement.removeProduct('Nonexistent')
    expect(result).toBe('Product not found')
  })
})
