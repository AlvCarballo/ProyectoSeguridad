import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { NgForm  } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {
  public page_title: string;
  public user: User;
  public status: string;

  constructor(
    private _userService:UserService
  ) {
    this.page_title = "Registro de usuarios";
    this.user = new User('','','1','','','','','');
    this.status="";
   }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm){
    this._userService.register(this.user).subscribe(
      response => {
        if(response.status == 'success'){
          this.status = 'success';
          form.reset();
        }else{
          this.status ='error';
        }
      },
      error => {
        this.status = 'error';
        console.log(error);
      }

    );

  }
}
