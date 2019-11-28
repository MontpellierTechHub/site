# Montpellier Tech Hub site

Website of the MTH association which help local meetups in Montpellier, France.
More information on [montpellier-techhub.org](https://www.montpellier-techhub.org/).

## Dev

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## Build

``` bash
# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

You can build a docker image to run the site
``` bash
# build docker image
docker build -t MontpellierTechHub/site:local .

# run image
docker run -p 3000:80 MontpellierTechHub/site:local

# Site available in localhost:3000
```

## Serverless (aka Cloud Functions)
Some part are automated using Firebase Cloud Functions. 
Install Firebase CLI
```bash
    npm install -g firebase-tools
```

**Only for  `/functions`**

Build commands
```bash
   npm run build
```

Test locally
```bash
   npm run shell
```
Deploy
```bash
   npm run deploy
```
