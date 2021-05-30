# Getting Started with Food Order App

Steps to start:
1) Download or clone the repo on your
2) open terminal & type: npm install (this will install all the required npm model which are added in the package.json file)
3) type: npm start after installation

## Description
This app is completely build using functional components. I have used multiple react hooks like useState, useEffect, useReducer, useRef & useContext. Have used react portal to add a component to another element in the HTML file. I have added a add to cart functionality, add and remove elemets from carts, validation invalid data adding in the cart.

### Project Flow

Root Component: App component
App component hold all the other component used in the app, at the top we have the cart model component to display all the products in the cart. The next is the header component which has the site title and cart button to open the cart model, after this there is the banner component with the banner image. The next is the meals component which has all the meals data.

Store Folder: Holds the Context API
There are 2 files in the folder, the CartContext & CartProvider
1) CartContext: This files holds the app wide state object which will be used of the add & remove cart logic.
2) CartProvider: This files holds the logic required for the add and removal functionality.

Components Folder
This folder contains all the components used in this app. components like header, bannner, meals summary, meals items. There are re-usable UI components in the UI folder like Card background, Form Input & Modal.

### Flow Chart

![alt text](https://github.com/sumeet1396/food-order-app/maste/flow-cart.jpg?raw=true)
