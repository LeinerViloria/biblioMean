import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoleService } from 'src/app/services/role.service';
import { UserService } from 'src/app/services/user.service';
 
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userRole:string="";

  constructor(public _userService:UserService, private _roleService:RoleService, private _router:Router) {}

  ngOnInit(): void {
    this._roleService.getRole().subscribe(
      {
        next: (v) => {
          this.userRole=v.name;
        },
        error: (e) => {
          this.logout();
        }
      }
    )
    
  }

  logout(){
    this._router.navigate(['/login']);
    this._userService.logout();
  }

}
