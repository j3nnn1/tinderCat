import { Component } from '@angular/core';
import { Subject} from 'rxjs';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cat-cards';

  parentSubject: Subject<string> = new Subject();

  constructor() {
    console.log(environment.jennivar);
  }
  cardAnimation(value) {
    this.parentSubject.next(value);
  }
}
