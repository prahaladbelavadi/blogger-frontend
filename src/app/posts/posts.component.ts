import { Component, OnInit } from '@angular/core';
import { ContentService } from "../content.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts;

  constructor(private contentService: ContentService) { }

  ngOnInit() {
    this.posts = this.contentService.getAllPosts();
  }

}
