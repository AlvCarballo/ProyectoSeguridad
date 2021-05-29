import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { NgForm  } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public page_title: string;
  public user: User;
  public identity: any;
  public token: string | any;

  public status2: string;

  constructor(
    private _userService:UserService
  ) {
    this.page_title = "Identificate";
    this.user = new User('','','1','','','','','');
    this.status2="";
   }

  ngOnInit(): void {
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
}
