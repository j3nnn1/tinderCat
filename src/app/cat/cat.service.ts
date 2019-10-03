import { Injectable } from '@angular/core';
import { Cat } from './cat.model';

import { Voting } from './interfaces/voting.interface';
import { Subject } from 'rxjs';
import { TheApiCat } from '../adapter/TheApiCat';

@Injectable({providedIn: 'root'})

export class CatService {

  public didVote = false;
  public cat: Cat;
  public cats: Cat[] = [
    {
      id: 'Loading Cat',
      url: 'assets/cat.jpg',
      height: 23,
      width: 30,
      categorieName: 'Loading Cat',
      categorie: 1,
      name: 'Loading Cat'
    }
  ];

  votingEmmiter = new Subject<boolean>();

  constructor(private apiCat: TheApiCat) {
    this.cat = this.cats[0];
  }

  getCatById(catId: string) {
    console.log('desde el cat service getCatById::::::::::::::::::::::::::::::::::::');
    return this.apiCat.getCatByImageId(catId);
  }

  getRandomCat() {
    return this.apiCat.getRandomCat();
  }
  getCat() {
    return this.cat;
  }

  uploadCat(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('sub_id', 'iwjaja');
    return this.apiCat.addACat(formData);
  }

  votingCat(userVote: Voting) {
    return this.apiCat.voteACat(userVote);
  }

}
