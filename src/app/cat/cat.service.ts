import { Injectable } from '@angular/core';
import { Cat } from './cat.model';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { CatInterface } from './interfaces/cat.interface';
import { Voting } from './interfaces/voting.interface';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})

export class CatService {


  private randomCatUrl      = 'https://api.thecatapi.com/v1/images/search';
  private votingCatUrl      = 'https://api.thecatapi.com/v1/votes';
  public didVote = false;

  private httpOptions = {
      headers: new HttpHeaders({'x-api-key': 'DEMO-API-KEY', 'Access-Control-Allow-Origin': '*' }),
  };

  public isPictureUrlAccesible = false;
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

  constructor(private http: HttpClient) {
    this.cat = this.cats[0];
  }

  isAccesibleResource(cat: Cat) {
        console.log('isAccesibleResource');
        console.log(this.http.get(cat.pictureUrl, {observe: 'response'}).subscribe( response => {

          console.log('status');
          console.log(response.status);
          console.log('statusText');
          console.log(response.statusText);
        }));
        this.isPictureUrlAccesible = true;
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
    return this.http.get<CatInterface[]>(this.randomCatUrl, this.httpOptions);
  }
  getCat() {
    return this.cat;
  }

  uploadCat(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('sub_id', 'iwjaja');

    return this.http.post(
      'https://api.thecatapi.com/v1/images/upload',
           formData,
      this.httpOptions);
  }

  votingCat(userVote: Voting) {
    console.log('cat service::votingCat ', userVote);

    return this.http.post(
        this.votingCatUrl,
        userVote,
        this.httpOptions
    );
  }

}
