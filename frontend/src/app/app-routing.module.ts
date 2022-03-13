import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListBookComponent } from './book/list-book/list-book.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import { AuthGuard } from './guard/auth.guard';
import { ListAuthorComponent } from './author/list-author/list-author.component';
import { SaveAuthorComponent } from './author/save-author/save-author.component';
import { SaveBookComponent } from './book/save-book/save-book.component';

const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'booksList',
    component:ListBookComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'authorsList',
    component:ListAuthorComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'saveAuthor',
    component:SaveAuthorComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'saveBook',
    component:SaveBookComponent,
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
