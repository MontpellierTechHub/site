# techhub-site

> Montpellier Tech Hub site  
Presentation site of the association and some cool features.


## Todo

Setup :
 - [ ] CSS Theme
 - [ ] Store & loading
 - [ ] Router
 - [ ] Social 

Features List
 - [ ] Calendrier des prochains meetups
 - [ ] Liste des sponsors
 - [ ] Défilement des sponsors
 - [ ] Proposer un talk
 - [ ] Liste des membres
 - [ ] Systeme de notif meetups (RSS/...
 - [ ] Faire un don
 - [ ] Dernières vidéos Youtube

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
