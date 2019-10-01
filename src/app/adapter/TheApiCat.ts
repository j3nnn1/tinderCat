import { TinderCat } from './TinderCat';
import { RandomCatResponseFromApiCat } from '../cat/interfaces/RandomCatResponseFromApiCat';
import { Voting } from '../cat/interfaces/voting.interface';

import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'}) // this avoid null injector error

export class TheApiCat implements TinderCat {

    baseurl = 'noDefined';
    version = 'vNull';
    addCat: string;
    voteCat: string;
    randomCatAction: string;
    apikey: string;

    httpOptions: {};

    constructor( private http: HttpClient ) {
        this.printConfig();
        this.setConfig();
    }

    printConfig() {
        console.log('the api cat variables:');
        console.log(environment.apiCatBaseUrl);
        console.log(environment.apiCatVersion);
        console.log(environment.apiCatAddCatAction);
        console.log(environment.apiCatVoteACatAction);
        console.log(environment.apiCatGetRandomCatAction);
        console.log(environment.apiCatXApiKey);
    }
    setConfig() {
        this.baseurl = environment.apiCatBaseUrl;
        this.version = environment.apiCatVersion;
        this.apikey = environment.apiCatXApiKey;
        this.addCat = environment.apiCatAddCatAction;
        this.voteCat = environment.apiCatVoteACatAction;
        this.randomCatAction = environment.apiCatGetRandomCatAction;
        this.httpOptions = {
            headers: new HttpHeaders({'x-api-key': this.apikey, 'Access-Control-Allow-Origin': '*' }),
        };
    }
    getURl(action: string): string {
        return this.baseurl + '/' + this.version + '/' + action;
    }
    getRandomCat() {
        return this.http.get<RandomCatResponseFromApiCat[]>(
            this.getURl(this.randomCatAction),
            this.httpOptions
        );
    }
    addACat(formData: FormData) {
        return this.http.post(
            this.getURl(this.addCat),
            formData,
            this.httpOptions
        );
    }
    voteACat(userVote: Voting) {
        return this.http.post(
            this.getURl(this.voteCat),
            userVote,
            this.httpOptions
        );
    }
}