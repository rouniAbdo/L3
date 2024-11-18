export class ProductListView {
    constructor() {
        this.productManagement = new ProductManagement()
    }
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
        return tr
    }

}