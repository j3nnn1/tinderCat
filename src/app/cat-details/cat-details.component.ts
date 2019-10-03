import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {CatService} from '../cat/cat.service';
import {Cat} from '../cat/cat.model';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})

export class CatDetailsComponent implements OnInit {

  public cat: Cat;
  public id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catService: CatService) {
  }
  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.cat = new Cat(this.id, 'https://cdn2.thecatapi.com/images/Knd8w4YdX.jpg', 0, 0, 'noname');

    this.catService.getCatById(this.id).subscribe(
          (data) => {
              this.cat.id = data.id;
              this.cat.height =  data.height;
              this.cat.width = data.width;
              this.cat.url = data.url;
              this.cat.name = data.id;
          }
    );
    this.route.params.subscribe((params: Params) => {
        this.id = params.id;
    });
  }

}
