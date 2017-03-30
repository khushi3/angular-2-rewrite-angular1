import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {ContactsService} from './contacts-service/contacts-service';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent],
  providers: [  ContactsService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
