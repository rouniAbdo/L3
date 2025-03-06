import { Product } from '../public/js/models/product.js'
import { ProductUpdater } from '../public/js/models/productUpdater.js'

describe('ProductUpdater', () => {
  let product, updater

  beforeEach(() => {
    product = new Product()
    updater = new ProductUpdater(product)
  })

  test('should update the product name', () => {
    updater.updateName('Smartphone')
    expect(product.getProductName()).toBe('Smartphone')
  })

  test('should update the product price', () => {
    updater.updatePrice(7999)
    expect(product.getProductPrice()).toBe(7999)
  })

  test('should update the product quantity', () => {
    updater.updateQuantity(15)
    expect(product.getProductQuantity()).toBe(15)
  })

  test('should update the VAT rate', () => {
    updater.updateVatRate(25)
    expect(product.getProductVatRate()).toBe(25)
  })

  test('should throw error for invalid name in update', () => {
    expect(() => updater.updateName('')).toThrow('Name cannot be empty and must be a string')
  })

  test('should throw error for invalid price in update', () => {
    expect(() => updater.updatePrice('price')).toThrow('Price must be a number.')
  })

  test('should throw error for invalid quantity in update', () => {
    expect(() => updater.updateQuantity('quantity')).toThrow('Quantity must be a number.')
  })

  test('should throw error for invalid VAT rate in update', () => {
    expect(() => updater.updateVatRate('vatRate')).toThrow('VAT rate must be a number.')
  })
})
