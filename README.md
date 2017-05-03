
# weathernow
A boilerplate for playing around with react, redux and react-router with the help of webpack.

Contains: 

* a working example of a Weather App which you can play around with.
* ES6 - 7 Support with Babel
* Routing
* hot module replacement support so you can change modules or react components without having to reload the browser
* a webpack production config so you can build the app and make it ready for production
* Sass support, just import your styles wherever you need them
* eslint to keep your js readable



## Run the app

0. ```npm install```
0. ```npm start```


Yes, it takes a while to load the first time you open the app.

### Is the hot module replacement really working?

Yup! Take a look:

The app updates without the browser having to reload. You don't lose state!

## Build the app
```npm run build```

This will build the app into the "dist" directory in the root of the project. It contains the index.html along with the minified assets, ready for production.

## Test the app
```npm test```
or
```npm t```

'Jest' is used for Unit testing and code coverage.
