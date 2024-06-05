1) Created the components folder within the src dir
2) Inside components, created NetflixRegisterComponent.js and wrote a function component in that. Subsequently exported that function.
3) Imported that function into index.js. Since the function component wasn't default we needed curly braces => import { NetflixRegisterComponent } from './components/NetflixRegisterComponents';
4) Created a file named demo.html to exhibit how strict mode forces coding standards in JS. React also has a strict mode in index.js. More on that later...
5) To use bootstrap in the project, install these libraries using the terminal: 
    npm install bootstrap --save
    npm install bootstrap-icons --save
6) Import relative CSS files in index.js    
    import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
    import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
7) Create more files inside src dir: Netflix(Footer|Header|Index|Main)Component.js
8) Use different components by importing and calling them in the index file: 
IMPORT: import { Component } from './components/indexComponent.js'
CALL: <Component />
