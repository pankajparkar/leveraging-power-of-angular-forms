import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lpaf-user-profile-template',
  templateUrl: './user-profile-template.component.html',
  styleUrls: ['./user-profile-template.component.scss']
})
export class UserProfileTemplateComponent implements OnInit {

  profile = {};

  constructor() { }

  submit(values) {
    // Make an aajax call
    console.log('Values ', values)
  }

  ngOnInit(): void {
    // setTimeout(() => {
    //   this.profile = {
    //     user: {
    //       email: "af@saf.come",
    //       address: "asfdf",
    //       zip: "400233",
    //       city: "Mumbai"
    //     }
    //   };
    // },5000)
  }

}
