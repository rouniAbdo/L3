
export class ProductFormHandler {
    constructor(productManagement, productListView) {
        this.productManagement = productManagement
        this.productListView = productListView
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
        const vatRate = parseFloat(document.querySelector('#productVatRate').value)

        const result = this.productManagement.addProduct(name, price, quantity, vatRate)
        if (result === 'Product already exists') {
            alert('Product already exists')
            return
        }
        this.productListView.updateView()
        this.resetForm()
    }
    /**
     * Purpose: to reset the form after adding a product.
     */
    resetForm() {
        document.querySelector('#addProductForm').reset()
    }
}