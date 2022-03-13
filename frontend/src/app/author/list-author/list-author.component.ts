import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-list-author',
  templateUrl: './list-author.component.html',
  styleUrls: ['./list-author.component.css']
})
export class ListAuthorComponent implements OnInit {

  public userRole:string="";

  constructor(private _roleService:RoleService) { }

  ngOnInit(): void {
    this._roleService.getRole().subscribe(
      {
        next: (v) => {
          this.userRole=v.name;
        },
        error: (e) => {}
      }
    );
  }

}
