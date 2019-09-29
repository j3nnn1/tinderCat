import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { CatComponent } from './cat/cat.component';
import { CatService } from './cat/cat.service';
import { HttpClientModule } from '@angular/common/http';
import { UnlessDirective } from './unless.directive';
import { CatAddComponent } from './cat-add/cat-add.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { CatHeaderComponent } from './cat-header/cat-header.component';
import { CatControlsComponent } from './cat/cat-controls/cat-controls.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule, MatIconModule} from '@angular/material';
import { MatGridListModule} from '@angular/material';
import { HighlightDirective } from './highlight.directive';
import { MatCardModule } from '@angular/material';
import { SummaryComponent } from './cat/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CatComponent,
    UnlessDirective,
    CatAddComponent,
    CatDetailsComponent,
    CatHeaderComponent,
    CatControlsComponent,
    NotFoundComponent,
    HighlightDirective,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule,
    MatGridListModule,
    MatCardModule
  ],
  exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatIconModule, MatGridListModule,
    MatCardModule],
  providers: [CatService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
