import { Product } from '../src/models/product.js'
import { PriceCalculator } from '../src/models/priceCalculator.js'

describe('PriceCalculator', () => {
  let priceCalculator, product1, product2

  beforeEach(() => {
    priceCalculator = new PriceCalculator()
    product1 = new Product()
    product2 = new Product()
    
    // Initial setup for product1
    product1.setProductName('Laptop')
    product1.setProductPrice(1000)
    product1.setProductQuantity(2)
    product1.setProductVatRate(25)

    // Initial setup for product2
    product2.setProductName('Tablet')
    product2.setProductPrice(500)
    product2.setProductQuantity(1)
    product2.setProductVatRate(12)
  })

  test('should calculate the price of a single product', () => {
    const totalPrice = priceCalculator.calculateSingleProductPrice(product1)
    expect(totalPrice).toBe(2500) // 1000 * 2 * (1 + 0.25)
  })

  test('should return a message if no product is provided for single calculation', () => {
    const result = priceCalculator.calculateSingleProductPrice([])
    expect(result).toBe('there are no products')
  })

  test('should calculate the total price of multiple products', () => {
    const totalPrice = priceCalculator.calculateTotalPrice([product1, product2])
    expect(totalPrice).toBe(3060)
  })

  test('should return a message if no products are provided for total calculation', () => {
    const result = priceCalculator.calculateTotalPrice([])
    expect(result).toBe(0)
  })

  test('should return a message if invalid input is provided for total calculation', () => {
    const result = priceCalculator.calculateTotalPrice('invalid input')
    expect(result).toBe(0)
  })
})
