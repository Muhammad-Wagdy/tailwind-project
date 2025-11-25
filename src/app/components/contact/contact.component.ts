import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface IUser{
  name : string
  age : number | null
  email: string
  password : string
}

@Component({
  selector: 'app-contact',
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})


export class ContactComponent {
  user : IUser = {
    name : '',
    age : null ,
    email : '',
    password : '',
  }
}
