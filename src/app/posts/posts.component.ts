import { Component, OnInit } from '@angular/core';
import { ContentService } from "../content.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts;
 public items;
  constructor(private contentService: ContentService, private route:Router) { }

  ngOnInit() {
    this.items = [
      {
        label: 'Posts',
        icon: 'pi pi-fw pi-paperclip',
        command: () => { this.navigateToPost(); }
      },
      {
        label: 'Write',
        icon: 'pi pi-fw pi-pencil',
        command: () => { this.navigateToEditor(); }
      }
    ];
  }

  navigateToPost() {
    this.route.navigate(['posts']);
  }

  navigateToEditor() {
    this.route.navigate(['editor']);
  }
}
