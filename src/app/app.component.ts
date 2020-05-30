import { Component } from '@angular/core';

const profile = {
  name: {
    firstname: 'Pankaj',
    lastname: 'Parkar',
  },
  address: {
    street: 'address 1',
    zip: '00011',
    city: 'Mumbai'
  }
};

@Component({
  selector: 'lpaf-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'leveraging-power-of-angular-forms';
}
