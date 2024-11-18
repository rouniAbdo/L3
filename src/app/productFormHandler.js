
export class ProductFormHandler {
    constructor(productManagement, productListView) {
        this.productManagement = productManagement
        this.productListView = productListView
        this.messageContainer = document.querySelector('#formMessage')
        this.initializeEventListeners()
    }
    /**
     * Purpose: to initialize event listeners.
     */
    initializeEventListeners() {
        document.querySelector('#addProductForm').addEventListener('submit',(event) => {
            event.preventDefault()
            this.handleAddProduct()
        })
    }
    /**
     * Purpose: to handle the addition of a product.
     */
    handleAddProduct() {
        const name = document.querySelector('#productName').value
        const price = parseFloat(document.querySelector('#productPrice').value)
        const quantity = parseInt(document.querySelector('#productQuantity').value)
        const vatRate = parseInt(document.querySelector('#productVat').value)

        const result = this.productManagement.addProduct(name, price, quantity, vatRate)
        if (result === 'Product already exists') {
            this.displayMessage('Produkten finns redan.', 'error')
            return
        }
        this.productListView.updateView()
        this.resetForm()
        this.displayMessage('Produkten har lagts till!', 'success')
    }
    /**
     * Purpose: to reset the form after adding a product.
     */
    resetForm() {
        document.querySelector('#addProductForm').reset()
    }
    displayMessage(message, type) {
        this.messageContainer.textContent = message
        this.messageContainer.className = `message ${type}`
        this.messageContainer.style.display = 'block'

        setTimeout(() => {
            this.messageContainer.style.display = 'none'
        }, 3000)
    }
}