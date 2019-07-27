import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditorComponent } from './editor/editor.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'editor'
  },
  {
    path: 'editor', component: EditorComponent
  },
  {
    path: 'posts', component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
