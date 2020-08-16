import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services';
import {FormBuilder, FormGroup, Validators, FormControl, FormArray} from "@angular/forms";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  user: any = {};
  submitted:boolean;
  errors: string;
  response:any = {};
  designation_arr:any = [];

  constructor(private fb: FormBuilder, private router: Router, private authenticationService: AuthenticationService) { 
    this.authenticationService.designation();
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
        'first_name': ['', [Validators.required]],
        'last_name': ['', [Validators.required]],
        'email': ['', [Validators.required, Validators.email]],
        'mobiles': this.fb.array([this.fb.group({'mobile_no': ['', [Validators.required, , Validators.minLength(10), Validators.maxLength(12)]]})]),
        'dob_date': ['', [Validators.required]],
        'designation_id': ['', [Validators.required]],
        'password': ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
        'confirm_password': ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
    },{
      validator: MustMatch('password', 'confirm_password')
    });
    
    this.designation_arr = this.authenticationService.getdesignation();
  }


  get getMobilephone() {
    return this.registerForm.get('mobiles') as FormArray;
  }

  addMobile() {
    this.getMobilephone.push(this.fb.group({'mobile_no': ['', [Validators.required, , Validators.minLength(10), Validators.maxLength(12)]]}));
  }

  deleteMobile(index) {
    this.getMobilephone.removeAt(index);
  }

  get registerFormControls() { 
    return this.registerForm.controls; 
  }

  onSubmit() {
      this.registerForm.markAllAsTouched();
      if (this.registerForm.invalid) {
          return;
      }
      this.submitted = true;
      this.response = this.authenticationService.register(this.registerForm.value);
      this.submitted = false;
      if(this.response.success){    
        this.registerForm.reset();
        this.router.navigate(['/login']);
      }else{
        this.errors = this.response.message;
      }
  }
}


export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ mustMatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}