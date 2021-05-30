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

<div class="mxgraph" style="max-width:100%;border:1px solid transparent;" data-mxgraph="{&quot;highlight&quot;:&quot;#0000ff&quot;,&quot;nav&quot;:true,&quot;resize&quot;:true,&quot;toolbar&quot;:&quot;zoom layers lightbox&quot;,&quot;edit&quot;:&quot;_blank&quot;,&quot;xml&quot;:&quot;&lt;mxfile host=\&quot;app.diagrams.net\&quot; modified=\&quot;2021-05-30T13:43:29.824Z\&quot; agent=\&quot;5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36\&quot; etag=\&quot;4f4cbBwG9rzTmNdeIKyz\&quot; version=\&quot;14.7.3\&quot; type=\&quot;google\&quot;&gt;&lt;diagram id=\&quot;C5RBs43oDa-KdzZeNtuy\&quot; name=\&quot;Page-1\&quot;&gt;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&lt;/diagram&gt;&lt;/mxfile&gt;&quot;}"></div>
<script type="text/javascript" src="https://viewer.diagrams.net/js/viewer-static.min.js"></script>
