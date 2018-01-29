# Demo App using Meteor React and ElasticSearch
An example created to learn MeteorJS and how to integrate elasticsearch as a search engine.

Steps to install.

ES Installation (MAC)

`brew install elasticsearch`

```
# Clone the repo.
git clone --recursive https://github.com/paridin/meteor_react_es
cd meteor_react_es
meteor npm install # to install npm dependencies
meteor # to run the app
```


Feed mongodb
```
> meteor mongo
db.simpsons.insert({
    "name" : "Homer",
    "occupation" : "Safety Inspector at the Springfield Nuclear Power Plant",
    "img_url" : "https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png",
    "detail" : "Homer Jay Simpson is a fictional character and the main protagonist of the American animated sitcom The Simpsons as the patriarch of the eponymous family. He is voiced by Dan Castellaneta and first appeared on television, along with the rest of his family, in The Tracey Ullman Show short \"Good Night\" on April 19, 1987. Homer was created and designed by cartoonist Matt Groening while he was waiting in the lobby of James L. Brooks' office. Groening had been called to pitch a series of shorts based on his comic strip Life in Hell but instead decided to create a new set of characters. He named the character after his father, Homer Groening. After appearing for three seasons on The Tracey Ullman Show, the Simpson family got their own series on Fox that debuted December 17, 1989."
})

db.simpsons.insert({
    "name" : "Marge",
    "occupation" : "Housewife",
    "img_url" : "https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png",
    "detail" : "Marjorie Jacqueline \"Marge\" Simpson (née Bouvier) is a fictional character in the American animated sitcom The Simpsons and part of the eponymous family. She is voiced by Julie Kavner and first appeared on television in The Tracey Ullman Show short \"Good Night\" on April 19, 1987. Tracy Ullman provided the first voice of Marge, which was then passed to Julie Kavner upon being picked up by Fox. Marge was created and designed by cartoonist Matt Groening while he was waiting in the lobby of James L. Brooks' office. Groening had been called to pitch a series of shorts based on Life in Hell but instead decided to create a new set of characters. He named the character after his mother Margaret Groening. After appearing on The Tracey Ullman Show for three seasons, the Simpson family received their own series on Fox, which debuted December 17, 1989."
})
```

Feed episodes ES
```
cd simpson-es
npm install
node utils/episode_scripts.js
```

### Images Demo

![Image MongoDB data](https://paridin.com/images/mongo-db.png)

![Image ES](https://paridin.com/images/es-search.png)
