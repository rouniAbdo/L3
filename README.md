## APP
## Product Management System
A web-based product management system that enables users to create, read, update, and delete products. The application features a responsive user interface with modal dialogs for editing and deleting products, real-time price calculations, and form validation.

## Features
* Add new products with name, price, quantity, and VAT rate
* Edit existing products via a modal interface
* Delete products with a confirmation dialog
* Real-time calculation of total price
* Form validation with error messages
* Responsive user interface
* Confirmation and error notifications
  
## Components

* **ProductApp** 

The main component that initializes and coordinates all other components. Serves as the starting point of the application.

* **ProductEditor**

Handles editing and deletion of products through modal dialogs. Features include:

Editing product details via a modal form
Deleting products with confirmation
Form validation for edited products

* **ProductFormHandler**

Manages the addition of new products with functionalities such as:

Form validation
Confirmation and error notifications
Automatic form reset after submission

* **ProductListView**

Displays the product list and manages UI updates:
Table view of products
Real-time total price calculations
Empty list handling
Action buttons for each product

## Future Improvements

* Personalized user accounts with login functionality
* Persistent storage (localStorage or backend integration)
* Sorting and filtering options

## Standalone Model

The system includes a standalone product model that can be used independently of the user interface. This allows for integration with other systems or usage in other contexts. See the [README](READMEL2.md) file for details.

## License
This project is licensed under the MIT License - see the [LICENSE](./docs/LICENSE) file for details
