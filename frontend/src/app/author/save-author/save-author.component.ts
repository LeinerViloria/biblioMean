import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthorService } from 'src/app/services/author.service';

@Component({
  selector: 'app-save-author',
  templateUrl: './save-author.component.html',
  styleUrls: ['./save-author.component.css']
})
export class SaveAuthorComponent implements OnInit {
  registerData:any;
  message: string ='';
  horizontalPosition:MatSnackBarHorizontalPosition = 'end';
  verticalPosition:MatSnackBarVerticalPosition = 'top';
  durationInSeconds:number = 2000;

  constructor(private _router:Router, private _authorService:AuthorService, private _snackBar:MatSnackBar) { 
    this.registerData={};
  }

  ngOnInit(): void {
  }

  saveAuthor(){
    if(!this.registerData.name){
      this.message="Incomplete data";
      this.openSnackBarError();
    }else{
      this._authorService.saveAuthor(this.registerData).subscribe(
        {
          next: (v) => {
            this._router.navigate(['/authorsList']);
            this.message="Successfull author save";
            this.openSnackBarSuccessful();
          },
          error: (e) => {
            this.message=e.error.message;
            this.openSnackBarError();
          }
        }
      )
    }
  }

  openSnackBarSuccessful(){
    this._snackBar.open(this.message, 'X', {
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.verticalPosition,
      duration:this.durationInSeconds,
      panelClass:['styleSnackBarSuccessful']
    });
  }

  openSnackBarError(){
    this._snackBar.open(this.message, 'X', {
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.verticalPosition,
      duration:this.durationInSeconds,
      panelClass:['styleSnackBarError']
    });
  }
}
