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

<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="731px" height="706px" viewBox="-0.5 -0.5 731 706" content="&lt;mxfile host=&quot;app.diagrams.net&quot; modified=&quot;2021-05-30T13:33:24.966Z&quot; agent=&quot;5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36&quot; etag=&quot;FvzQTsjg6jXh85XycScO&quot; version=&quot;14.7.3&quot; type=&quot;google&quot;&gt;&lt;diagram id=&quot;C5RBs43oDa-KdzZeNtuy&quot; name=&quot;Page-1&quot;&gt;7Vxbc5s4FP41ntl9aMcIJONH203S7LadbL3dpE87spFtWkCuLN/21y8KAoyEbbDBpE5nOikSQoJz+c53jpS0zIG/uWN4PvtIHeK1QNvZtMx3LQAMC4CW+Nd2tlFPBxlRx5S5jhyUdgzd/4jsbMvepeuQRWYgp9Tj7jzbOaZBQMY804cZo+vssAn1sqvO8ZRoHcMx9vTeR9fhs6jXBp20/z1xp7N4ZQN1ozs+jgfLL1nMsEPXO13mTcscMEp5dOVvBsQTwovl8ni/ffQ+fEd3f/y1+IG/9P/8+9M/b6LJbss8knwCIwGvdmozmnqFvaWUV28+DzsG1J/TQCwHkBeu2R+x8Goqrn77LL54Z8jvUjx8G8uc0WXgELGuET6wnrmcDOd4LO6uQysL+2bc9+TtCQ24NBsjlGl/6uGF0Hk7vF5wRr8nehOjEyWI2xPX8wbUo+x5WXNij8l4nDy2c2dkQwuKJwpKUkp8RRgnmx07kpK9I9QnnG3DIfIu6FrRI9JLbGkz69TkjNiOZjvmZsk+LK18msycajK8kMrMV2xw++P2wf80eSLdf9f9hdWDw9GbjqYU4oR+IZuU8Rmd0gB7N2lvP1WbEFU65gOlcyn+b4TzrdQWXnKaVWW0plhI8b1i4l7QJRuTAx/VztcBIx7m7iq7aJ5E5aMP1BWGHeuuE0OV1B0wFaVwzKaEy6dSvfQYw9udYXMxYFF8HaOjOGy58eFF9AapkSQyOd1u2hogDDllRKwqXD4I/UG8Yu/hXjcwzwtBnRTw+KzbOpjYk1y3RWObjCaJYWnuWNS09rotglkRo4Jua9fltoYmfl3MgdMTcTFsjQVUuuOsdEN5sO3TbuOr8Oi3MG6+20gPj1pb2TrTeSMnORZqdE3siBrmSDruO9PHkYWyvtRWNBhhj+bj2kTQynfKqsECKpYZv3Ctzm9p1hd7vNnTiUDEFEL9kWcDxVz8T0ffBIs7jxFk8YEYDiSdPHzooo6JUY34AIGiBasgQMC6AAJpKnpgdCV0kKeiAWbCprDjtMRbIuwLUUc/n53KpyuhNY9OQxi5EqWpoJ4Q+MaU1i2F6kHIqivkVU1B7j76Uhpy0YmQWxUqGlUE5Y3Ln9IwHLa+7txJI7JoxAE5CeTttxbMxPIjkfy59UCYG345YdWE911ufiiT3KUB+dIETRql2c3aUtIua5QmzCZ8WiZXEQ/Q1rkEDzCAZvEfCfYW2cJAhdFiMpmA/MzdQSME64wWZjtrEVbREI/qihaGXpSRcfzqhK8ie/Oy1ylweaxvIgFrDFAVfDJQN/zQkyDVQEenqghUwd6X3vduwDjyRE1ArNP9S1OPUsyjQpJxEBqPsgwAr4JlGEpw0lKUuqlvR7O/9wQ7Iam8xmCk+HhSB24uGtm5TKC/5JwG16gCtd5iGo2roFzufpgQtF8hIdBUUxT7rLZ9eKKasS82s2o0Xy6OxjHb2InYafzOj9m1x95OwdgbodaLib3qXk1h+1OSE7OmbUFoKzEeXSDDB3pNq4+D4DoDO1BYlAmbjioxlPxKMwtHFVPxamWKwnU7cGSiqup2KnrIder1ar1yFNfthkvfx88Kuzr3Vklj8xU8UEUV6QQK0AjRLEIdQEHqABo9JKBRh1N3rDTqAC5MXaFmf7KCfM+Jf5VlfEXihQ/g1YcBeulEYLHUwStQAYSwaRXo5ZPeCrseHnni0MPVbmlZLy0expnTXl+4pew1uARqHJXMBg8YJhsRL6moUZiZvKyihnra4FRmAtSdiZqZiVll4ntiUa3MRljd9heHqOP21/llf1XYn54hl7e/K9pQBUWLuuae371oxv6gug96qv1B9Rx43fanVwa+3LcO/r7VfTBf5hCiGfVHy0VpMuRAYjtWHhmywchElzxphYomCIZRGx3SE+UzwtFpdOgl7fHERP04HFhNwgFQKn6dU+EAdJSJLg0H+vmeY3DwkToic/r54cBQMN0omhzVCAd6zaY0HJzposc9DzXpedqBpDignRuIrUsTQb02dMzzBpg5V+F4dvZghWUj3fHaSLchG+43l/P87mc9ZFPEXxstHKj+CtVDDIUjpTpRZVsaYTP9GwrR8PQvUZg3/wM=&lt;/diagram&gt;&lt;/mxfile&gt;" resource="https://app.diagrams.net/#G1kj9nFaRgcU4A-7OPSpqGSiXMfKHAXlrh"><defs/><g><rect x="254" y="20" width="120" height="40" rx="6" ry="6" fill="#f8cecc" stroke="#b85450" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 40px; margin-left: 255px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">App Component<br />(Root Component)</div></div></div></foreignObject><text x="314" y="44" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">App Component...</text></switch></g><path d="M 670 80 L 670 110 L 670 163.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 670 168.88 L 666.5 161.88 L 670 163.63 L 673.5 161.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><ellipse cx="670" cy="40" rx="60" ry="40" fill="#dae8fc" stroke="#6c8ebf" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 40px; margin-left: 611px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Store/ Context API</div></div></div></foreignObject><text x="670" y="44" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Store/ Context API</text></switch></g><path d="M 606 40 L 520 40 Q 510 40 500 40 L 380.37 40" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 375.12 40 L 382.12 36.5 L 380.37 40 L 382.12 43.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="480" y="80" width="120" height="50" rx="7.5" ry="7.5" fill="#e1d5e7" stroke="#9673a6" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 105px; margin-left: 481px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Context:<br />App wide state object</div></div></div></foreignObject><text x="540" y="109" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Context:...</text></switch></g><rect x="610" y="160" width="120" height="50" rx="7.5" ry="7.5" fill="#e1d5e7" stroke="#9673a6" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 185px; margin-left: 611px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Provide:<br />Cart add &amp; remove logic</div></div></div></foreignObject><text x="670" y="189" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Provide:...</text></switch></g><path d="M 670 110 L 600 110" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 314 60 L 314 130 Q 314 140 314 150 L 314 373.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 314 378.88 L 310.5 371.88 L 314 373.63 L 317.5 371.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="260" y="380" width="120" height="60" rx="9" ry="9" fill="#fff2cc" stroke="#d6b656" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 410px; margin-left: 261px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Meals Component</div></div></div></foreignObject><text x="320" y="414" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Meals Component</text></switch></g><rect x="0" y="80" width="120" height="60" rx="9" ry="9" fill="#fff2cc" stroke="#d6b656" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 110px; margin-left: 1px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Cart Component</div></div></div></foreignObject><text x="60" y="114" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Cart Component</text></switch></g><path d="M 314 109.5 L 224 109.5 Q 214 109.5 204 109.5 L 184 109.5 Q 174 109.5 164 109.5 L 130.37 109.5" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 125.12 109.5 L 132.12 106 L 130.37 109.5 L 132.12 113 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><path d="M 60 140 L 60 213.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 60 218.88 L 56.5 211.88 L 60 213.63 L 63.5 211.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="374" y="170" width="120" height="60" rx="9" ry="9" fill="#fff2cc" stroke="#d6b656" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 200px; margin-left: 375px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Header Component</div></div></div></foreignObject><text x="434" y="204" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Header Component</text></switch></g><rect x="480" y="250" width="120" height="60" rx="9" ry="9" fill="#fff2cc" stroke="#d6b656" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 280px; margin-left: 481px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">CartButton Component</div></div></div></foreignObject><text x="540" y="284" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">CartButton Component</text></switch></g><path d="M 314 200 L 361.63 200" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 366.88 200 L 359.88 203.5 L 361.63 200 L 359.88 196.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><path d="M 494 200 L 530 200 Q 540 200 540 210 L 540 243.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 540 248.88 L 536.5 241.88 L 540 243.63 L 543.5 241.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="160" y="290" width="120" height="60" rx="9" ry="9" fill="#fff2cc" stroke="#d6b656" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 320px; margin-left: 161px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Banner Component</div></div></div></foreignObject><text x="220" y="324" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Banner Component</text></switch></g><path d="M 313 321 L 306.5 321 Q 300 321 294.68 321 L 289.37 321" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 284.12 321 L 291.12 317.5 L 289.37 321 L 291.12 324.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="480" y="380" width="120" height="60" rx="9" ry="9" fill="#fff2cc" stroke="#d6b656" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 410px; margin-left: 481px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Meals Summary Component</div></div></div></foreignObject><text x="540" y="414" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Meals Summary Compon...</text></switch></g><path d="M 380 410 L 473.63 410" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 478.88 410 L 471.88 413.5 L 473.63 410 L 471.88 406.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><rect x="0" y="220" width="120" height="60" rx="9" ry="9" fill="#fff2cc" stroke="#d6b656" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 250px; margin-left: 1px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Cart Items Component</div></div></div></foreignObject><text x="60" y="254" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Cart Items Component</text></switch></g><rect x="0" y="495" width="120" height="60" rx="9" ry="9" fill="#fff2cc" stroke="#d6b656" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 525px; margin-left: 1px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Meal Item Component</div></div></div></foreignObject><text x="60" y="529" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Meal Item Component</text></switch></g><rect x="0" y="380" width="120" height="60" rx="9" ry="9" fill="#fff2cc" stroke="#d6b656" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 410px; margin-left: 1px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Available Meals Component</div></div></div></foreignObject><text x="60" y="414" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Available Meals Comp...</text></switch></g><rect x="0" y="620" width="120" height="60" rx="9" ry="9" fill="#fff2cc" stroke="#d6b656" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 650px; margin-left: 1px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">Meal Item Form Component</div></div></div></foreignObject><text x="60" y="654" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">Meal Item Form Compo...</text></switch></g><path d="M 260 410 L 126.37 410" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 121.12 410 L 128.12 406.5 L 126.37 410 L 128.12 413.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><path d="M 60 440 L 60 488.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 60 493.88 L 56.5 486.88 L 60 488.63 L 63.5 486.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><path d="M 60 555 L 60 613.63" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 60 618.88 L 56.5 611.88 L 60 613.63 L 63.5 611.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><path d="M 320 595 L 380 650 L 320 705 L 260 650 Z" fill="#d5e8d4" stroke="#82b366" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 650px; margin-left: 261px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">UI Component<br />Input</div></div></div></foreignObject><text x="320" y="654" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">UI Component...</text></switch></g><path d="M 120 650 L 253.63 650" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 258.88 650 L 251.88 653.5 L 253.63 650 L 251.88 646.5 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><path d="M 210 120 L 270 175 L 210 230 L 150 175 Z" fill="#d5e8d4" stroke="#82b366" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 118px; height: 1px; padding-top: 175px; margin-left: 151px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">UI Component<br />Modal</div></div></div></foreignObject><text x="210" y="179" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">UI Component...</text></switch></g><path d="M 60 174 L 144.07 174.56" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 149.32 174.6 L 142.29 178.05 L 144.07 174.56 L 142.34 171.05 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/><path d="M 201 426 L 254 468.5 L 201 511 L 148 468.5 Z" fill="#d5e8d4" stroke="#82b366" stroke-miterlimit="10" pointer-events="all"/><g transform="translate(-0.5 -0.5)"><switch><foreignObject style="overflow: visible; text-align: left;" pointer-events="none" width="100%" height="100%" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: flex; align-items: unsafe center; justify-content: unsafe center; width: 104px; height: 1px; padding-top: 469px; margin-left: 149px;"><div style="box-sizing: border-box; font-size: 0; text-align: center; "><div style="display: inline-block; font-size: 12px; font-family: Helvetica; color: #000000; line-height: 1.2; pointer-events: all; white-space: normal; word-wrap: normal; ">UI Component<br />Card</div></div></div></foreignObject><text x="201" y="472" fill="#000000" font-family="Helvetica" font-size="12px" text-anchor="middle">UI Component...</text></switch></g><path d="M 60 470 L 141.63 468.61" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="stroke"/><path d="M 146.88 468.52 L 139.94 472.14 L 141.63 468.61 L 139.82 465.14 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="all"/></g><switch><g requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"/><a transform="translate(0,-5)" xlink:href="https://www.diagrams.net/doc/faq/svg-export-text-problems" target="_blank"><text text-anchor="middle" font-size="10px" x="50%" y="100%">Viewer does not support full SVG 1.1</text></a></switch></svg>
