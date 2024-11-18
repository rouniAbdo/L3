export class ProductEditor {
    constructor(productManagement, productListView){
        this.productManagement = productManagement
        this.productListView = productListView
    }
    /**
     * Purpose: to update the product list view.
     */
    handleEdit(prouctName){
        const product = this.productManagement.findProductByName(prouctName)
        if (!product) return
        const newName = prompt('Enter new name')
        const newPrice = parseFloat(prompt('Enter new price'))
        const newQuantity = parseInt(prompt('Enter new quantity'))
        const newVatRate = parseFloat(prompt('Enter new VAT rate'))
        const updatedProduct = {
            name: newName,
            price: newPrice,
            quantity: newQuantity,
            vatRate: newVatRate
        }
        this.productManagement.updateProduct(product, updatedProduct)
        this.productListView.updateView()
    }
    /**
     * Purpose: to handle the deletion of a product.
     *
     * @param {string} productName - the name of the product to be deleted.
     */
    handleDelete(productName){
       if (confirm('Are you sure you want to delete this product?')){
           this.productManagement.removeProduct(productName)
       }
    }

}