import { Component } from '@angular/core';
import { Contact } from './contact';

@Component({
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})

export class ContactComponent {
  contacts = [
    new Contact('/minhthang', 'https://www.linkedin.com/in/minh-th%E1%BA%AFng-9557701b3/', 'linkedin', 'linkedin'),
    new Contact('/khacminhthang', 'https://github.com/khacminhthang', 'github', 'github'),
    new Contact('minhthang.lekhac', 'https://www.facebook.com/minhthang.lekhac/', 'facebook', 'facebook'),
  ];
}
