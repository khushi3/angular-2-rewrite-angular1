import { Component,Input} from '@angular/core';
import {Contact} from './models/contact';
import {ContactsService} from './contacts-service/contacts-service';
@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
})
export class AppComponent  {
  @Input() contact: Contact;
  public items:any = [];
  constructor (private contactsService: ContactsService){
  	console.log(this.contactsService.getContacts());
    this.contactsService.getContacts().subscribe(data => {
    	this.items= data;
    	console.log(this.items);

    })
  	//this.contactsService.getContacts();
  }
 }
