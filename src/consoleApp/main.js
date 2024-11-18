import { ProductManagement } from '../utils/productManagement.js'
import readline from 'readline'
/**
 * This is the main entry point for the console application.
 */
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const productManagement = new ProductManagement()
/**
 * Displays the main menu.
 */
const showMenu = () => {
    console.log(`
        Produkthantering - huvudmeny
        =================================
        
        1. lägg till produkt
        2. visa produktlista
        3. redigera produkt
        4. ta bort produkt
        5. Beräkna totalpris
        6. Avsluta
        `)
}
/**
 * Adds a product to the list.
 */
const handleAddProduct = () => {
    rl.question('Ange produktnamn: ', (name) => {
        if (!name.trim()) {
            console.log('Produktnamn kan inte vara tomt.')
            main()
            return
        }
        rl.question('Ange pris: ', (price) => {
            rl.question('Ange kvantitet: ', (quantity) => {
                rl.question('Ange moms: ', (vatRate) => {
                    const result = productManagement.addProduct(name, parseFloat(price), parseInt(quantity), parseFloat(vatRate))
                    if (result) {
                        console.log(result)
                    } else {
                        console.log('Produkten har lagts till!')
                    }
                    main()
                })
            })
        })
    })
}
/**
 * Displays all products.
 */
const showAllProducts = () => {
    const products = productManagement.products
    if (products.length === 0) {
        console.log('Det finns inga produkter.')
    } else {
        console.log('Produkter:')
        products.forEach(product => {
            console.log(`
                Namn: ${product.getProductName()},
                Pris: ${product.getProductPrice()} kr,
                Kvantitet: ${product.getProductQuantity()},
                Moms: ${product.getProductVatRate()}%
            `)
        })
    }
    main()
}
/**
 * Updates a product.
 */
const handleUpdateProduct = () => {
    rl.question('Ange namnet på produkten som ska uppdateras: ', name => {
        const product = productManagement.findProductByName(name)
        if (!product) {
            console.log('Produkten hittades inte.')
            main()
            return
        }
        rl.question('Uppdaterat namn: ', newName => {
            rl.question('Uppdaterat pris: ', newPrice => {
                rl.question('Uppdaterad kvantitet: ', newQuantity => {
                    rl.question('Uppdaterad moms : ', newVatRate => {
                        const updatedInfo = {
                            name: newName || undefined,
                            price: newPrice ? parseFloat(newPrice) : undefined,
                            quantity: newQuantity ? parseInt(newQuantity) : undefined,
                            vatRate: newVatRate ? parseFloat(newVatRate) : undefined
                        }
                        productManagement.updateProduct(name, updatedInfo)
                        console.log('Produkten har uppdaterats.')
                        main()
                    })
                })
            })
        })
    })
}
/**
 * Removes a product.
 */
const handleRemoveProduct = () => {
    rl.question('Ange namnet på produkten som ska tas bort: ', name => {
        const result = productManagement.removeProduct(name)
        if (result) {
            console.log('Produkten har tagits bort.')
        } else {
            console.log('Produkten hittades inte.')
        }
        main()
    })
}
/**
 * Calculates the total price of all products.
 */
const handleCalculateTotalPrice = () => {
    const totalPrice = productManagement.calculateTotalPrice()
    console.log(`Totalpris: ${totalPrice} kr`)
    main()
}
/**
 * Main function that displays the main menu and handles user input.
 */
const main = () => {
    showMenu()
    rl.question('Välj ett alternativ (1-6): ', (choice) => {
        switch (choice) {
            case '1':
                handleAddProduct()
                break
            case '2':
                showAllProducts()
                break
            case '3':
                handleUpdateProduct()
                break
            case '4':
                handleRemoveProduct()
                break
            case '5':
                handleCalculateTotalPrice()
                break
            case '6':
                console.log('Avslutar programmet...')
                rl.close()
                break
            default:
                console.log('Ogiltigt val. Försök igen.')
                main()
                break
        }
    })
}

// Start the program
main()
