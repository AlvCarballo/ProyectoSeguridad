import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { AppComponent } from '../../app.component';
import { User } from '../../models/user';
@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public page_title: string;
  public identity: any;
  public token:any;
  constructor(

  ){
    this.page_title ='Ajustes de usuario';
  }
  ngOnInit() {
  }

}
