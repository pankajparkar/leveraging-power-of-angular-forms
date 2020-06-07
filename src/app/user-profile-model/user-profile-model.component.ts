import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'lpaf-user-profile-model',
  templateUrl: './user-profile-model.component.html',
  styleUrls: ['./user-profile-model.component.scss']
})
export class UserProfileModelComponent implements OnInit {

  profileForm;

  // FormControl - Input field

  // FormGroup - Collection of field

  // FormArray - Collection of form Group / inputs /field

  constructor(
    private fb: FormBuilder
  ) { }

  customValidation = (control) => {
    console.log(control.value)

    return control.value && control.value.length > 10? {
      addressInvalid: true
    }: null;
  };

  onAgreeChanged() {
    const {agree} = this.profileForm.value;
    const cityCtrl: AbstractControl = this.profileForm.get("city");

    if (agree) {
      cityCtrl.clearValidators();
      cityCtrl.setValidators([Validators.required]);
    } else {
      cityCtrl.clearValidators();
    }
    this.profileForm.updateValueAndValidity();
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      address: new FormControl("", [
        Validators.required, 
        Validators.compose([this.customValidation.bind(this)])
      ]),
      zip: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.minLength(6)]),
      city: new FormControl(""),
      agree: ["", [Validators.required]],
    })
  }
}
