import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';
const routes: Routes = [
{
  // tslint:disable-next-line:whitespace
  path:'',
  component: UsersComponent
},
{
  // tslint:disable-next-line:whitespace
  path:'details/:id',
  component: DetailsComponent
},
{
  // tslint:disable-next-line:whitespace
  path:'posts',
  component: PostsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
