# Game points

Live version is hosted by [AWS S3](http://game-points.s3-website.eu-north-1.amazonaws.com/)

> This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)  

## Requirements from local development

* use NodeJS v16.13+

## Available Scripts

* `npm start` - run the app in development mode. App is available on [http://localhost:3000](http://localhost:3000)
* `npm test` - Launches the test runner in the interactive watch mode
* `npm build` - Builds the app for production to the `build` folder
* `npm run tslint` - Run TypeScript check
* `npm run lint` - Run Eslint check
* `npm run lint:fix` - Run Eslint in fix mode

## Deployment

This project is using [Github Actions](https://github.com/features/actions) to run tests and deploy to AWS S3. Currently only for `main` branch

## Configuration

Game configuration is in `src/config/gameConfig.ts`