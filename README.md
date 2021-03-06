## **NOTE TO INTERVIEW CANDIDATES: Please do not share the contents in this directory tree. Sharing this repo will make it difficult for us to evaluate candidates.**

### Setup

1. Install [nvm](https://github.com/creationix/nvm/blob/master/README.md)
1. Install [yarn](https://yarnpkg.com/en/)
1. Install [lerna](https://github.com/lerna/lerna) globally
1. `nvm install v8.10.0`
1. `cd` into the interview environment and `npm install`

### Usage w/ create react app

1. run `npx create-react-app my-app` from the packages directory of the lerna environment
2. add the `api` package to the create-react-app's package.json (`"api" : "*"`)
3. run `lerna bootstrap`

### Getting started

Please create a new lerna package to build your component in. You should npm/yarn install any dependencies you need to build your component
