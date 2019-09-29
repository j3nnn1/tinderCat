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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catService: CatService) {


  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.route.params.subscribe(
      (params: Params) => {
        this.cat = this.catService.getCatById(+params.id);
      }
    );
    console.log('El id a buscar detalle: ' + id);
  }

}
