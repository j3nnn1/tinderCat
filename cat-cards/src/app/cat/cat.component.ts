import {Component,  OnInit, ElementRef, ViewChild} from '@angular/core';
import { Cat } from './cat.model';
import { CatService } from './cat.service';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.css']
})
export class CatComponent implements OnInit {
  public cat: Cat;       // passing to child component
  private catVoting = false;

  @ViewChild('countLikes', {static: true}) countLikes: ElementRef;

  public index = 0;

  constructor(private catService: CatService) {
      this.catService = catService;
  }

  ngOnInit() {
    this.catService.votingEmmiter.subscribe(didVote => {
      this.catVoting = didVote;
    });
    this.cat = this.catService.getCat();
    this.fetchNewRandomCat();
  }

  fetchNewRandomCat() {

      this.catService.getRandomCat().subscribe(
        (data) => {
          const randomCat = data.shift();
          this.cat.id = randomCat.id;
          this.cat.pictureUrl = randomCat.url;
          this.cat.width = randomCat.width;
          this.cat.height = randomCat.height;
          this.catVoting = false;
        }
      );
  }
}
