import { Component, DoCheck, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { NgForm  } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit, DoCheck {

  public page_title: string;
  public user: User;
  public identity: any;
  public token: string | any;
  public status2: string;

  constructor(
    private _userService:UserService,
    private _router:Router,
    private _route:ActivatedRoute
  ) {
    this.page_title = "Identificate";
    this.user = new User('','','1','','','','','');
    this.status2="";
   }

   onSubmit(form: NgForm){
    this._userService.signup(this.user).subscribe(
      response => {
        if(!response.status || response.status !='error'){
          this.status2='success';
          this.identity = response;
          //Sacar el token
          this._userService.signup(this.user, true).subscribe(
            response => {
              if(!response.status || response.status !='error'){
                this.token = response;
                console.log(this.identity);
                console.log(this.token);
                 //Guardamos el login
                localStorage.setItem('token', this.token);
                localStorage.setItem('identity', JSON.stringify(this.identity));
              }else{
                this.status2='error';
              }
            },
            error => {
              this.status2='error';
              console.log(error);
            }
          );
        }else{
          this.status2='error';
        }
      },
      error => {
        this.status2='error';
        console.log(error);
      }
    );
  }
  ngDoCheck(): void {
    //No puedo activarlo ya que borra al optener el json
    //this.loadUser();
  }
  ngOnInit() {
    this.logout();
    this.loadUser();
  }
  loadUser(){
    this.token= this._userService.getToken();
    this.identity = this._userService.getIdentity();
  }
  logout(){
    this._route.params.subscribe(params=> {
      let sure =+params['sure'];
      if(sure==1){
        localStorage.removeItem('identity');
        localStorage.removeItem('token');
        this.identity=null;
        this.token=null;
        //redirecionamos
        this._router.navigate(['']);
      }
    });

  }
}
