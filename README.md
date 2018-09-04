# create-react-web-app

This is a template to create your own react web app. It initializes a file structure using react to create componenets, sass for styling with bulma built-in and gulp to compile everything.

To create the React code, build off of and add on to ~/src/main.js
To create new styles, add files in ~/src/css and make sure to link them in ~/src/css/main.sass using @import.

To test locally, first install the required node modules by running "npm install" within the folder you're working in. Then run "gulp server" to compile all the code and start the watcher. If you edit a file and save, gulp will recompile your code. To see your local web app, navigate to "localhost:5000". If you've saved and gulp is recompiling, it might take a couple seconds before your changes appear.

Once you're ready to release the web app, you can just upload the whole file structure and it should work. The main files that will do the work are "server.js" (the Node.js server), and within the public folder you have the "index.html" that runs "bundle.js" (the compiled react code) and "main.css" (the compiled sass code).

To change the logo, put your png file in public/images and to change the favicon, you can add a favicon.png in the same folder as well. To change the name of the app, edit the <title> tag in public/index.html