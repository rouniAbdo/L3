export class ProductListView {
    constructor(productManagement, productEditor) {
        this.productManagement = productManagement
        this.productEditor = productEditor
        this.tbody = document.querySelector('#productList tbody')
        this.productMessage = document.querySelector('#productMessage')
        this.totalPrice = document.querySelector('#totalPrice')
    }
    /**
     * To update the view.
     */
    updateView () {
        this.tbody.innerHTML = ''

        const products = this.productManagement.products
        if (products.length === 0) {
            this.productMessage.textContent = 'Det finns inga produkter.'
            this.totalPrice.textContent = '0 kr'
            return
        }
        this.productMessage.textContent = ''

        products.forEach(product => {
            const tr = this.createProductRow(product)
            this.tbody.appendChild(tr)
        })
        this.updateTotalPrice()
    }
    /**
     * To create a row for a product.
     *
     * @param {Product} product - the product for which the row will be created.
     */
    createProductRow (product) {
        const tr = document.createElement('tr')
        tr.innerHTML = `
          <td>${product.getProductName()}</td>
          <td>${product.getProductPrice()} kr</td>
          <td>${product.getProductQuantity()}</td>
          <td>${product.getProductVatRate()} %</td>
          <td class="action-buttons">
                <button class="edit-btn" data-name="${product.getProductName()}">Redigera</button>
                <button class="delete-btn" data-name="${product.getProductName()}">Ta bort</button>
            </td>
        `
        this.addRowEventListeners(tr, product.getProductName())
        return tr
    }
    /**
     * To add event listeners to the row.
     *
     * @param {HTMLElement} row - the row to which the event listeners will be added.
     */
    addRowEventListeners(row, productName) {
        row.querySelector('.edit-btn').addEventListener('click', () => 
            this.productEditor.handleEdit(productName))
        row.querySelector('.delete-btn').addEventListener('click', () => 
            this.productEditor.handleDelete(productName))
    }
    /**
     * To update the total price.
     */
    updateTotalPrice() {
        const totalPrice = this.productManagement.calculateTotalPrice()
        if (totalPrice === 0) {
            this.totalPrice.textContent = '0 kr'
            return
        }
        this.totalPrice.textContent = `${parseFloat(totalPrice).toFixed(2)} kr`
    }
}