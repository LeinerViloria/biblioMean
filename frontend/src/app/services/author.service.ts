import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  private env:string;

  constructor(private _http:HttpClient) { 
    this.env=environment.APP_URL;
  }

  saveAuthor(author:any){
    return this._http.post<any>(this.env+"author/authorRegister", author);
  }

  getAuthors(name:string=""){
    return this._http.get<any>(this.env+"author/authorsList/"+name);
  }

}
