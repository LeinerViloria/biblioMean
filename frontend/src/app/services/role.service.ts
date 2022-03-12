import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
  private env:string;

  constructor(private _http:HttpClient) {
    this.env = environment.APP_URL;
   }

  getRole(){
    return this._http.get<any>(this.env+"role/userRole");
  }
}
