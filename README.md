# XENA

An app for gamers as well as non-gamers intrested stepping into the gaming world. You can view all available games (that are on this API) from all platforms.
You can also save the one's you like in your own wishlist. You can also add friends and view their wishlists.

Here you can view and test the app:
https://xena.herokuapp.com/

## Installing / Getting started

npm install : Installs the required dependencies.

In the project directory, you can then run:

npm run dev : Runs storybook and the app in development mode to view it in the browser.

### The default PORTS are:

3001 for the server
3000 for the client
6006 for the storybook

## 📜 .env

If you plan on publishing the code you should use dotenv to secure your `API keys` and `Access Tokens` that you will need to connect with MongoDB and Twitch API.

You can follow the instructions here to request your own API key and Token: https://api-docs.igdb.com/#account-creation

Building
npm run build : This will build the client, server and storybook for production to the dist folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes.

npm start : Runs the server in production mode and serve production bundle from npm run build

### In production, you have a single server serving everything.

/api/_ is the API endpoint.
/storybook is the storybook.
/_ is the client.

## Tests

A test runner is not installed (right now). But TypeScript, linter and prettier are checked on commit and push thanks to husky and lintstaged.
