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

### Front

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

### Back

#### Pre-requesites
You will need [Leiningen][1] 2.5.0 or above installed.

[1]: https://github.com/technomancy/leiningen

Clone the project and run `lein deps` to fetch the dependencies, and then `lein ring server` to build the static website and launch a server on port 3000. A new tab of your default browser will automatically open on `localhost:3000`.

#### New pages
To create a new page, simply add a new `.md` file with the desired template in `resources/templates/md/pages`

#### Build
Run `lein run` to build the project. The static website is created in `resources/public`. You can now `s3cmd`/`sftp` it onto your server. Enjoy !
                    
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
