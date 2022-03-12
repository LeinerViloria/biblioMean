import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { BookService } from 'src/app/services/book.service';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  booksData:any;
  private message:string = "";
  private durationInSeconds:number = 2000;
  private horizontalPosition:MatSnackBarHorizontalPosition = "center";
  private verticalPosition:MatSnackBarVerticalPosition = "top";
  public userRole:string="";

  constructor(private _bookService:BookService, private _roleService:RoleService, private _snackBar:MatSnackBar) {
    this.booksData={};
   }

  ngOnInit(): void {
    this._bookService.getBooks().subscribe({
      next: (v) =>{

        if(v.length<=0){
          this.message = "Books not found";
          this.openErrorSB();
        }else{
          this.booksData=v;
        }
        
      },
      error: (e) => {
        this.message = e.error.msg;
        this.openErrorSB();
      }
    });

    this._roleService.getRole().subscribe(
      {
        next: (v) => {
          this.userRole=v.name;
        },
        error: (e) => {}
      }
    );
  }

  openSuccessfulSB(){
    this._snackBar.open(this.message, "X", {
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.verticalPosition,
      duration:this.durationInSeconds,
      panelClass:['styleSnackBarSuccessful']
    });
  }

  openErrorSB(){
    this._snackBar.open(this.message, "X", {
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.verticalPosition,
      duration:this.durationInSeconds,
      panelClass:['styleSnackBarError']
    });
  }

}
