
This is a repo to keep organize a side project using the cat api https://thecatapi.com/ and keep learning about animations, angular 2, and Material angular 

CatCards have:
==========

- vote for a cat
- upload a cat image
- get Random cats for voting.

May be soon:
==========

- list votings
- list uploaded images
- descriptions about a cat 
- deleting images.
- deleting votes.
- pass to environment vars parameters like url, key, and others things.


Thanks to:
==========

 - @fairmutex, I take the design from here 
https://stackblitz.com/edit/angular-tinder-swipe?file=src%2Fapp%2Fapp.component.css thanks!
 - the api cat: ♥ https://docs.thecatapi.com/
 - And the cats who possed, with out them, this would not be possible.
 
## Structure

```
<app-component>
    <app-cat-header>
    <app-card> => router-outle => cat-add,  app-cat, cat-details, cat-not-found,
    <app-cat-controls>
<app-component>
```

![Cat Cards](https://github.com/j3nnn1/tinderCat/blob/master/CatCards.png?raw=true)

## some useful things to remember

- routerLink ==> directiva angular para navegar por links.

- install --save @angular/material @angular/cdk @angular/animations)
  ng add @angular/material

agregar en /code/angular7/cat-card/cat-cards/src/app/app.module.ts
los nuevos modulos en ngModules -> import

## Forms

import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInput, MatInputModule} from "@angular/material";

## Others public APIs

https://cataas.com/#/

https://cataas.com/#/about

https://cataas.com/cat/says/thanks

## using angular/cli with ghpages
```
 npm install -g angular-cli-ghpages
```

- edit master...

- in branch master:
	ng build --prod --base-href="https://j3nnn1.github.io/tinderCat/" --deploy-url="https://j3nnn1.github.io/tinderCat/"

- in branch gh-pages:
ngh

- and later put credentials

with git log yu can see the changes made it to sent.

Note: to not go remote
ngh --dry-run
