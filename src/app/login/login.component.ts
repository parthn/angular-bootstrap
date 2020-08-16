import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services';
import {FormBuilder, FormGroup, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: any = {};
  submitted:boolean;
  errors: string;
  response:any = {};
  constructor(private fb: FormBuilder, private router: Router, private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
        'email': ['', [Validators.required, Validators.email]],
        'password': ['', [Validators.required, Validators.minLength(6), Validators.maxLength(16)]]
    });
  }

  get loginFormControls() { return this.loginForm.controls; }

  onSubmit() {
      this.loginForm.markAllAsTouched();
      if (this.loginForm.invalid) {
          return;
      }      
      this.submitted = true;
      this.response = this.authenticationService.login(this.loginForm.value);
      this.submitted = false;
      if(this.response.success){            
        localStorage.setItem('token', this.response.token);
        localStorage.setItem('currentUser', JSON.stringify(this.response.user));
        this.loginForm.reset();
        this.router.navigate(['/']);
      }else{
        this.errors = this.response.message;
      }
  }

}
