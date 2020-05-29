# About
This project allows you to get information about your favorite shows. 
Yeah it was made for an assement for real developers the only interesting part is the way 
The only real interesting part is how I set up the components. It was made with the re-ducks pattern
where every component is it's own map and in the map you can find the redux, actions and views. (and smaller components if it is only used in that part) all the exports of that component are in the index so if internal logic changes other components shouldn't feel the effect (or atleast minimalistic)
[https://medium.com/@rohan.dhar1992/scaling-redux-applications-with-reducks-bff0ab69601c]

If you want to see it live follow this link.
[https://showwatcher.netlify.app] 


### `npm start`

To run the app local just run npm start as is basic with create-react-apps(cra or crap). 
For developers that are learning please never use cra again. Parcel is a lot faster and gives way less overhead your folders.
See [https://github.com/alphabravoab/react-parcel]

If you got this running just visit [http://localhost:3000](http://localhost:3000) in the the browser.



### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

You should only use this when deploying to a real site (which with this version you should never want to do)

### 'tests'
There are no tests. 

