import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { NgForm  } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public page_title: string;
  public user: User;
  constructor() {
    this.page_title = "Registro de usuarios";
    this.user = new User(1,'','','','','','','','','');
   }
  ngOnInit(): void {
    console.log(this.user);
  }
  onSubmit(form: NgForm){
    const { uId, uEmail, uPassword, uRole, uNombre, uApellidos, uTelefono, uDireccion, uCreated_at, uDelete_at } = form.value;
    this.user = {
      uId,
      uEmail,
      uPassword,
      uRole,
      uNombre,
      uApellidos,
      uTelefono,
      uDireccion,
      uCreated_at,
      uDelete_at
    }
    console.log(this.user);
  }
}
