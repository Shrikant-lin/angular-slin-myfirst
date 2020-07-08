import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { PageParentforhelloworldComponent } from './page-parentforhelloworld/page-parentforhelloworld.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,HelloworldComponent, PageParentforhelloworldComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
