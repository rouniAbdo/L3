import { ProductManagement } from '../utils/productManagement.js'
import { ProductEditor } from './productEditor.js'
import { ProductListView } from './productListView.js'
import { ProductFormHandler } from './ProductFormHandler.js'

export class ProductApp {
    constructor() {
        this.productManagement = new ProductManagement()
    }

    initializeApp() {
        const productEditor = new ProductEditor(this.productManagement)
        const productListView = new ProductListView(this.productManagement, productEditor)

        // update the productEditor with the productListView
        productEditor.productListView = productListView

        // create a new instance of ProductFormHandler
        const productFormHandler = new ProductFormHandler(
            this.productManagement, 
            productListView
        )
        // show the initial view
        productListView.updateView()
    }
}
