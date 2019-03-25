# Dan-Governanace-Apollo-Server
## Overview
Dan-governance-apollo-server is a service which requests to the microservices source (ex - dan-policy-manager service, dan-governance-tos-service) for the response and then we can have that response on the client side via Apollo Client.

## Technology Stack

*  [Node.js](https://nodejs.org) server.
*  [Express](https://expressjs.com/) node.js framework for building REST APIs
*  [Apollo Server](https://www.apollographql.com/docs/apollo-server/) Apollo Server is the best way to quickly build a production-ready, self-documenting API for GraphQL clients, using data from any source.
*  [Docker](https://en.wikipedia.org/wiki/Docker_(software)) To setup similar production and development environment
*  [Jest](https://jestjs.io/docs/en/getting-started) Jest is used to test Javascript frameworks  
  

## Key Features
1.  **src/config:**:

This folder has two main files as of now

*  `configuration.js` which contains all the configurable variables required in the service. Use this file to add any new variable. This file basically picks up variables from `environment (process.env)`, will use default if not found. In order to set these variables create a `.env` file (similar to `.env-example` file)

2.  **src/libs:** This directory has some common libraries or classes which we can use in our services, in future we can create a separate package for this. Currently, it has two folders and few files:

*  `routes` it has error handler and not found routes
*  `gqlLoader.js` It loads all the schema types from the .graphql extension files
* `mergeResolvers.js` It merge all the resolvers of Query, Mutation and Subscription.
* `index.js` Exported our gqlLoader and mergeResolvers.
*  `Server.js` The main class that creates the express server.

3.  **src/modules:** It contains independent modules having their Query, Mutation, Subscription resolvers schema and test cases.

* `/module/constants.js` This file contains all string constants that is to be used in the modules
* `/module/mutations.js` This file contains all the mutation resolvers for the module.
* `/module/queries.js` This file contains all the query resolvers for the module.
* `/module/subscriptions.js` This file contains all the subscription resolvers for the module.
* `/module/schema.graphql` This file contains all the input and type of query, mutation and subscription schema.
* `*.spec.js` This file contains the test cases for the module.
* `/module/index.js` This file exports all the resolvers.
* `index.js` This file exports all the modules.
* `schema.graphql` This file contains the final schema of Query, Mutation and Subscription of the modules

4. **src/services:** This directory contains different services for the modules having the main business logic for the resolvers.

* `/sampleService/SampleService` This file contains service class having methods with business logic implementation for the resolvers.
* `/sampleService/constants.js` This file contains all the string constants for the service.
* `/index.js` This file exports all the services.

5.  **src/utils:**  This directory contains all the utilities files.

* `Helpers.js` This file contains the Helper class having generic helper methods that is to be used with in the service.
*  `Request.js` This file contains the Request class having requests method for requesting microservices.
* `index.js` This file exports both the classes

8.  **src/index.js:** This file exports the merged typeDefs and resolvers.
10.  **src/server.js:** This file is used to initialise the server.
  
  

## Getting Started - Setup
1.  **Clone the repository**

```
git clone <link>
```

2.  **Create the .env file**
For reference we have .env.example file

3.  **Install all the dependencies**
```
npm install or npm i
```
OR
```
yarn install
```
## Scripts
It starts the service
```
npm start
```
To run linter on the service
```
npm run lint
```
To fix the linting errors
```
npm run lint:fix
```

```
npm run build
```
## Testing

We use unit tests with [Jest](https://github.com/facebook/jest) in this project
- To run tests
```
npm run test
```

## Linting

We also use [tslint](https://palantir.github.io/tslint/) with Typescript Standard Style.
- To run lint:
```
npm run lint
```
```
lint:fix
```

  
  

## Workflow

  

## Commit Command [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

  

To commit your files to git use `yarn commit` instead of `git commit`, it will open an interactive view to enter your commit message and rest of the arguments will remain same as "git commit"

  

Please note: Other commands like `git add` etc will remain the same.

  

Incase if above command will not work then run following command and then try again.

`./node_modules/.bin/commitizen or ./node_modules/.bin/git-cz`

  

#### Development Category

For commit message or branch name we will use following categories:

- feat (feature)

- fix (bug fix)

- docs (documentation)

- style (formatting, missing semi colons, etc)

- refactor

- test (when adding missing tests)

- chore (maintain)

  

#### Format of Commit Message

  

```

<DEVELOPMENT CATEGORY>: <SUBJECT>

<BLANK LINE>

<BODY>

<BLANK LINE>

<FOOTER>

```

  

#### BRANCHES

  

**Git flow** needs to be initialized in order to customize your project setup.

  

##### Initialize

```

git flow init

```

  

##### Features

Develop new features for upcoming releases.

  

- Start a new feature:

  

``` git flow feature start MYFEATURE ```

  

- Finish a feature:

  

``` git flow feature finish MYFEATURE ```

  

- Publish a feature

  

``` git flow feature publish MYFEATURE ```

  

- Getting a published feature

  

``` git flow feature pull origin MYFEATURE ```

  

##### Release

Support preparation of a new production release

Allow for minor bug fixes and preparing meta-data for a release

  

- Start a new release:

  

``` git flow release start RELEASE ```

  

- Finish a release:

  

``` git flow release finish RELEASE ```

  

**IMP:** Don't forget to do ```git push --tags```

  

- Publish a release

  

``` git flow release publish RELEASE ```

  

- Getting a release feature

  

``` git flow release pull origin RELEASE ```

  
  

##### Hotfixes

Hotfixes arise from the necessity to act immediately upon an undesired state of a live production version

  

- Start a new hotfix:

  

``` git flow hotfix start VERSION ```

  

- Finish a release:

  

``` git flow hotfix finish RELEASE ```

  
  
 