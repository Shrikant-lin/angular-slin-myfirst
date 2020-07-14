import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { PageParentforhelloworldComponent } from './page-parentforhelloworld/page-parentforhelloworld.component';
import { PageLoginformComponent } from './page-loginform/page-loginform.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent,HelloworldComponent, PageParentforhelloworldComponent, PageLoginformComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
