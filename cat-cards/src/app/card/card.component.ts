import { Component, OnInit, Input } from '@angular/core';
import { trigger, keyframes, animate, transition } from '@angular/animations';
import * as kf from './keyframes';
import { User } from './user';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardAnimator', [
      transition('* => swiperight', animate(750, keyframes(kf.swiperight))),
      transition('* => swipeleft', animate(750, keyframes(kf.swipeleft)))
    ])
  ]

})
export class CardComponent implements OnInit {

  public users: User[] = [
    {
      "id": 0,
      "picture": "https://placehold.it/350x349",
      "age": 23,
      "name": "Wichy Del Valle"

    },
    {
      "id": 1,
      "picture": "https://placehold.it/350x349",
      "age": 40,
      "name": "Anastasia monmatre"

    },
    {
      "id": 2,
      "picture": "https://cdn2.thecatapi.com/images/28f.jpg",
      "age": 35,
      "name": "Federica Isabela"
    }
  ];

  public index = 0;
  @Input()
  parentSubject: Subject<any>;



  animationState: string;
  constructor() { }

  ngOnInit() {
    // this.parentSubject.subscribe(event => {
    //  this.startAnimation(event);
    // });
  }

  startAnimation(state) {
    if (!this.animationState) {
      this.animationState = state;
    }
  }

  resetAnimationState(state) {
    this.animationState = '';
    this.index++;
  }
}
