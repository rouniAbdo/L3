import { Product } from '../src/models/product.js'

describe('Product', () => {
  let product

  beforeEach(() => {
    product = new Product()
  })

  test('should create a Product with default values', () => {
    expect(product.getProductName()).toBe('')
    expect(product.getProductPrice()).toBe(0)
    expect(product.getProductQuantity()).toBe(0)
    expect(product.getProductVatRate()).toBe(0)
  })

  test('should set valid product name', () => {
    product.setProductName('Laptop')
    expect(product.getProductName()).toBe('Laptop')
  })

  test('should throw error for invalid product name', () => {
    expect(() => product.setProductName('')).toThrow('Name cannot be empty and must be a string')
    expect(() => product.setProductName(123)).toThrow('Name cannot be empty and must be a string')
  })

  test('should set valid product price', () => {
    product.setProductPrice(1500)
    expect(product.getProductPrice()).toBe(1500)
  })

  test('should throw error for invalid product price', () => {
    expect(() => product.setProductPrice('1500')).toThrow('Price must be a number.')
    expect(() => product.setProductPrice(NaN)).toThrow('Price must be a number.')
  })

  test('should set valid product quantity', () => {
    product.setProductQuantity(5)
    expect(product.getProductQuantity()).toBe(5)
  })

  test('should throw error for invalid product quantity', () => {
    expect(() => product.setProductQuantity('five')).toThrow('Quantity must be a number.')
    expect(() => product.setProductQuantity(NaN)).toThrow('Quantity must be a number.')
  })

  test('should set valid VAT rate', () => {
    product.setProductVatRate(25)
    expect(product.getProductVatRate()).toBe(25)
  })

  test('should throw error for invalid VAT rate', () => {
    expect(() => product.setProductVatRate('25')).toThrow('VAT rate must be a number.')
    expect(() => product.setProductVatRate(NaN)).toThrow('VAT rate must be a number.')
  })

  test('should return the correct product information', () => {
    product.setProductName('Tablet')
    product.setProductPrice(5000)
    product.setProductQuantity(10)
    product.setProductVatRate(12)

    const productInfo = product.getProductInfo()
    expect(productInfo).toEqual({
      name: 'Tablet',
      price: 5000,
      quantity: 10,
      VatRate: 12
    })
  })
})
