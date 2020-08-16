import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
  user_arr:any = [];
  designation_arr:any = [];
  res_obj:any = {};
  constructor() { }

  designation() {
    this.designation_arr = [{'id':1,'name':'Trainee Engineer'},
                            {'id':2,'name':'Software Engineer'},
                            {'id':3,'name':'Sr. Software Engineer'},
                            {'id':4,'name':'Team Engineer'},
                            {'id':5,'name':'Project Manager'}]
    localStorage.setItem('designation_data', JSON.stringify(this.designation_arr));
    this.res_obj = {'success' : true};
    return this.res_obj;
  }
  
  getdesignation() {
    this.res_obj = {'success' : false};
    this.designation_arr = JSON.parse(localStorage.getItem('designation_data'));
    if(this.designation_arr){
      this.res_obj = {'success' : true, 'data': this.designation_arr};
    }
    return this.res_obj;
  }
  
  register(user) {
    this.res_obj = {'success' : false, 'message':'User Not Register'};
    if(localStorage.getItem('user_data')){
      this.user_arr = JSON.parse(localStorage.getItem('user_data'));
    }
    this.user_arr.push(user);
    localStorage.setItem('user_data', JSON.stringify(this.user_arr));
    this.res_obj = {'success' : true};
    return this.res_obj;
  }

  login(user) {
    this.res_obj = {'success' : false, 'message':'User Not Login'};
    if(localStorage.getItem('user_data')){
      this.user_arr = JSON.parse(localStorage.getItem('user_data'));
    }
    if(this.user_arr){
      this.user_arr.forEach(element => {
        if(element.email == user.email && element.password == user.password){
          this.res_obj = {'success' : true,
                          'user' : element,
                          'token' : String(Math.random()).substring(2,30)};
        }
      });
    }
    return this.res_obj;
  }

  logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('currentUser');
      this.res_obj = {'success' : true};
      return this.res_obj;
  }

}
