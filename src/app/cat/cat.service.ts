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
      pictureUrl: 'assets/cat.jpg',
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

  getCatById(catId: number) {
    return {
      id: '2j0',
      pictureUrl: 'https://cdn2.thecatapi.com/images/2j0.jp',
      url: 'https://cdn2.thecatapi.com/images/2j0.jpg',
      width: 400, height: 266,
      name: ('Nombre del Gato:' + ' 2j0'),
      lastname: 'kkkk test',
      categorie: 2,
      categorieName: '2j0'};
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
