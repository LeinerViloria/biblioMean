import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private env:string;

  constructor(private _http:HttpClient) { 
    this.env=environment.APP_URL;
  }

  getBooks(bookName:string=""){
    return this._http.get<any>(this.env+"book/booksList/"+bookName);
  }
}
