import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from 'src/environments/environment';
import { User } from '../models/user';

@Injectable()
export class UserService {
  public urlApi: string;
  public identity: any;
  public token:any;

  constructor(
    public _http: HttpClient
  ){
    this.urlApi = environment.urlApi;
  }

  register(body: User):Observable<any> {
    let json = JSON.stringify(body);
    let params = `json=${json}`;

    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this._http.post(`${environment.urlApi}register`, params, { headers });
  }
  signup(user: User, gettoken=false):Observable<any> {
    if(gettoken == true){
      user.gettoken=true;
    }else{
      user.gettoken="";
    }
    let json = JSON.stringify(user);
    let params = `json=${json}`;

    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    return this._http.post(`${environment.urlApi}login`, params, { headers });
  }
  getIdentity(){
    let identity= JSON.parse(localStorage.getItem('identity')||'{}');
    console.log("Identity:");
    console.log(identity);
    if(identity&&identity != 'undefined'){
      this.identity=identity;
    }else{
      this.identity=null;
    }
    return this.identity;
  }
  getToken(){
    let token= localStorage.getItem('token');
    console.log("token:");
    console.log(token);
    if(token&&token != 'undefined'){
      this.token=token;
    }else{
      this.token=null;
    }
    return this.token;
  }
}
