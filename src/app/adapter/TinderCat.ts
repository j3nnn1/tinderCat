import {Observable} from 'rxjs';
import {Voting} from '../cat/interfaces/voting.interface';


export interface TinderCat {


    getRandomCat(): Observable<any>;

    addACat(formData: FormData): Observable<any>;

    voteACat(userVote: Voting): Observable<any>;

}
