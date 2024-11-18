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
