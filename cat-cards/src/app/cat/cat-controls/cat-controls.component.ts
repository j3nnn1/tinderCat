import {Component, Injectable, Input} from '@angular/core';
import {CatService} from '../cat.service';

@Component({
  selector: 'app-cat-controls',
  templateUrl: './cat-controls.component.html',
  styleUrls: ['./cat-controls.component.css']
})

@Injectable()

export class CatControlsComponent  {

  @Input() catVotingId: string;
  userVote = {image_id: this.catVotingId, sub_id: 'iwjaja', value: 0};

  constructor(private catService: CatService) { }

  onFetchNewRandomCat() {
      console.log('fetching new data in cat-controls components.');
      this.catService.getRandomCat().subscribe(
        (data) => {
          const randomCat = data.shift();
          this.catService.cat.id         = randomCat.id;
          this.catService.cat.pictureUrl = randomCat.url;
          this.catService.cat.height     = randomCat.height;
          this.catService.cat.width      = randomCat.width;
          this.catService.didVote        = false;
        }
      );
    this.catService.votingEmmiter.next(false);
  }
  isLike() {
    this.userVote.value = 1;
    this.userVote.image_id = this.catVotingId;
    this.catService.votingCat(this.userVote).subscribe(
      data => {
        console.log('voting ok');
      },
      error => {
        console.log('error voting!');
      });

    this.catService.votingEmmiter.next(true);

  }
  dislike() {
    this.userVote.value = 0;
    this.userVote.image_id = this.catVotingId;
    this.catService.votingCat(this.userVote).subscribe(
      data => {
      console.log('voting ok');
    },
      error => {
      console.log('error voting!');
    });
    this.catService.votingEmmiter.next(true);
  }
}
