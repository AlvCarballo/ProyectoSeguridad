import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { NgForm  } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit, DoCheck{
  title = 'seguridad';
  public identity: any;
  public token:any;
  public status2: string;
  public user: User;
  constructor(
    private _userService:UserService,
    private _router:Router,
    private _route:ActivatedRoute
  ){
    this.status2="";
    this.user = new User('','','1','','','','','');
  }
  ngDoCheck(): void {
    this.loadUser();
  }
  ngOnInit() {
    this.logout();
  }

  loadUser(){
    this.identity = this._userService.getIdentity();
    this.token= this._userService.getToken();
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
        this._router.navigate(['./']);
      }
    });
    this.loadUser();
  }
}
