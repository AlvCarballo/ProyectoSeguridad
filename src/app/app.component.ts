import { Component, OnInit, DoCheck, Input, Output } from '@angular/core';
import { UserService } from './services/user.service';
import { User } from './models/user';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit{
  title = 'seguridad';
  public identity: any;
  public token:any;
  constructor(
    private _userService:UserService,
    private _router:Router,
    private _route:ActivatedRoute
  ){

  }

  ngOnInit() {
    this.logout();
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
  }
}
