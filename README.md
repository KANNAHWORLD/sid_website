# Hello! Welcome to the SidHub repo
This is my project website that I plan to keep up-to-date as I learn new 
things and work on new projects.

## Contribution
IF you like any of the reference guides or grade calculators
that I have made and would like to contribute create a new one, please feel free to contact me! It would be awesome to see more calculators and reference guides.

## Steps for adding a new calculator
1. Define the format of the calculator under src/Components/PageManager/Calculators. Review 
the format of other files and follow the same JSON format to define a new calculator

2. Create a new webpage under src/Components/Webpages/CalculatorWebpages.
Follow the format of other calculators. This step creates a renderable 
webpage for your calculator.

3. In src/Components/PageManager/Resources/Calculators.js, add a dict item into the list
with the title for the webpage and a link for the webpage. This step creates a link for your webpage in the Resources home page. Please limit the title to 30 characters and the link 
should begin with "Resources"

4. Under src/Components/PageManager/Pages.js, add a link and a new dictionary item with "path" and 
"element" keys. The path should start with "Resource/" and the element should 
be a jsx element that renders the entire page. The element name should be the same as the 
one created in step 2 and the link should be the same as the link in part 3.

## Steps for adding a new Resources webpage
1. Create a React component under src/Components/Webpages/ProgrammingGuides. Feel free
to review other files in the the same directory to get an idea of creating a react component.
This step creates a new 

2. In src/Components/PageManager/Resources/ProgGuides.js, add a dict item into the list
with the title for the webpage and a link for the webpage. This step creates a link for your webpage in the Resources home page. Please limit the title to 30 characters and the link 
should begin with "Resources"

3. Under src/Components/PageManager/Pgaes.js, add a link and a new dictionary item with "path" and 
"element" keys. The path should start with "Resource/" and the element should 
be a jsx element that renders the entire page. The element name should be hte same as the 
one created in step 2 and the link should be the same as the link in part 1.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
