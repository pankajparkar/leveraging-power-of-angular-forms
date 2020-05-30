import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lpaf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email;
  password;
  check;

  constructor() { }

  ngOnInit(): void {}

  onSubmit(form) {
    console.log(form)
  }

}
