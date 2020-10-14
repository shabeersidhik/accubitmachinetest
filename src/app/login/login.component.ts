import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  error:boolean=false;
  hide=true;
  constructor(private form:FormBuilder,private router:Router) { this.login() }

  ngOnInit(): void {
   
  }
  login(){
    this.loginForm=this.form.group({
      strUsername:[''],
      strPassword:['']
    })
  }
  get f() { return this.loginForm.controls; }

  onSubmit(){
    if(this.f.strUsername.value=='admin' && this.f.strPassword.value=='123456'){
      this.router.navigate(['/home'])
    }else{
     this.error=!this.error; 
    }
  }
}
