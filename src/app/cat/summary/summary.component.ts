import {Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import { Tile } from '../interfaces/tile.interface';
import {Cat} from '../cat.model';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit, OnChanges {

  @Input() public catSearchId: string; // getting from parent component
  @Input() public catWidth: number;
  @Input() public catHeight: number;

  tiles: Tile[] = [
    {text: 'Random Cat', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    // {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    // {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor() {
  }
  ngOnChanges(changes: SimpleChanges) {
    const catSearchId: SimpleChange = changes.catSearchId;
    // console.log('prev value: ', catSearchId.previousValue);
    // console.log('got name: ', catSearchId.currentValue);
    this.tiles[0].text = 'id: ' + this.catSearchId;
    this.tiles[1].text = 'width:' + this.catWidth + ' height: ' + this.catHeight;
  }
  ngOnInit() {

  }
}
