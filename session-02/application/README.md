# Netflix Registration App

This project is a simple Netflix registration app built using React. It includes various components and utilizes Bootstrap for styling.

## Project Structure

1. Create a `components` folder within the `src` directory.

2. Inside the `components` folder:
   - Create `NetflixRegisterComponent.js` and write a function component. Export this function.

3. In `index.js`, import the function component from `NetflixRegisterComponent.js`. Since it's not the default export, use curly braces:
   ```javascript
   import { NetflixRegisterComponent } from './components/NetflixRegisterComponent';

4. Create a file named demo.html to demonstrate how strict mode enforces coding standards in JavaScript. Note that React also has a strict mode in index.js.

5. To use Bootstrap in the project, install the following libraries via the terminal:
    ```Terminal
    npm install bootstrap --save
    npm install bootstrap-icons --save
    
6. Import the relevant CSS files in index.js:
    ```JavaScript
    import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
    import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
    
7. Create additional files inside the src directory:
    - NetflixFooterComponent.js
    - NetflixHeaderComponent.js
    - NetflixIndexComponent.js
    - NetflixMainComponent.js

8. Use different components by importing and calling them in the index.js file:
    ```JavaScript
    import { Component } from './components/NetflixIndexComponent';
    <Component />

9. Class components are derived from the React.Component base class. In the example below, NetflixRegistration extends React.Component:
    ```JavaScript
    import React from "react";
    export default class NetflixRegistration extends React.Component {
        constructor() {
            // Essential to call super to initialize the super class
            super();
        }
        render() {
            return (
                <>
                    <h1>Sunny</h1>
                </>
            );
        }
    }