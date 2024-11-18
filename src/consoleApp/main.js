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
 * Main function that displays the main menu and handles user input.
 */
const main = () => {
    showMenu()
    rl.question('Välj ett alternativ (1-6): ', (choice) => {
        switch (choice) {
            case '1':
                handleAddProduct()
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
