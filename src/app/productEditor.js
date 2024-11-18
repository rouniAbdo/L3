export class ProductEditor {
    constructor(productManagement, productListView) {
      this.productManagement = productManagement
      this.productListView = productListView
  
      // Elements for edit modal
      this.editModal = document.querySelector('#editModal')
      this.editForm = document.querySelector('#editProductForm')
      this.editProductName = document.querySelector('#editProductName')
      this.editProductPrice = document.querySelector('#editProductPrice')
      this.editProductQuantity = document.querySelector('#editProductQuantity')
      this.editProductVat = document.querySelector('#editProductVat')
      this.closeEditButton = this.editModal.querySelector('.close')
      this.productToEdit = null
  
      // Elements for delete modal
      this.deleteModal = document.querySelector('#deleteModal')
      this.confirmDeleteButton = document.querySelector('#confirmDelete')
      this.cancelDeleteButton = document.querySelector('#cancelDelete')
      this.closeDeleteButton = this.deleteModal.querySelector('.close')
      this.productToDelete = null
  
      // Initialize modal event listeners
      this.initializeEventListeners()
    }
  
    /**
     * Handles editing a product.
     *
     * @param {string} productName
     */
    handleEdit(productName) {
      const product = this.productManagement.findProductByName(productName)
      if (!product) return
  
      // Populate form fields with existing product data
      this.productToEdit = productName
      this.editProductName.value = product.getProductName()
      this.editProductPrice.value = product.getProductPrice()
      this.editProductQuantity.value = product.getProductQuantity()
      this.editProductVat.value = product.getProductVatRate()
  
      // Show the edit modal
      this.editModal.style.display = 'block'
    }
  
    /**
     * Handles deletion of a product.
     *
     * @param {string} productName
     */
    handleDelete(productName) {
      this.productToDelete = productName
      this.deleteModal.style.display = 'block'
    }
  
    /**
     * Confirms deletion of a product.
     */
    confirmDeletion() {
      if (this.productToDelete) {
        this.productManagement.removeProduct(this.productToDelete)
        this.productListView.updateView()
      }
      this.deleteModal.style.display = 'none'
    }
  
    /**
     * Cancels the deletion process.
     */
    cancelDeletion() {
      this.deleteModal.style.display = 'none'
    }
  
    /**
     * Closes the edit modal.
     */
    closeEditModal() {
      this.editModal.style.display = 'none'
    }
  
    /**
     * Initializes event listeners for modals.
     */
    initializeEventListeners() {
      // Close edit modal
      this.closeEditButton.addEventListener('click', () => this.closeEditModal())
      window.addEventListener('click', (event) => {
        if (event.target === this.editModal) this.closeEditModal()
      })
  
      // Edit form submission
      this.editForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const updatedProduct = {
          name: this.editProductName.value,
          price: parseFloat(this.editProductPrice.value),
          quantity: parseInt(this.editProductQuantity.value),
          vatRate: parseInt(this.editProductVat.value),
        }
        this.productManagement.updateProduct(this.productToEdit, updatedProduct)
        this.productListView.updateView()
        this.closeEditModal()
      })
  
      // Delete modal buttons
      this.confirmDeleteButton.addEventListener('click', () => this.confirmDeletion())
      this.cancelDeleteButton.addEventListener('click', () => this.cancelDeletion())
      window.addEventListener('click', (event) => {
        if (event.target === this.deleteModal) this.cancelDeletion()
      })
    }
  }
  