import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CatComponent} from './cat/cat.component';
import {CatAddComponent} from './cat-add/cat-add.component';
import {CatDetailsComponent} from './cat-details/cat-details.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {AppComponent} from './app.component';
import {CardComponent} from './card/card.component';


const routes: Routes = [
  { path: '', redirectTo: '/cat', pathMatch: 'full'}, // could be redirectTo: Component, pathMatch: full
  { path: 'cat', component: CardComponent, children : [
      { path: '', component: CatComponent, pathMatch: 'full' },
      { path: 'add', component: CatAddComponent, pathMatch: 'full'},
      { path: ':id/details', component: CatDetailsComponent, pathMatch: 'full'}
    ]},
  { path: 'not-found', component: NotFoundComponent},
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
