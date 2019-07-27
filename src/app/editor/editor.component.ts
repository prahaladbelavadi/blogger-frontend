import { Component, OnInit } from '@angular/core';
import { ContentService } from '../content.service';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

  text1 = 'The grand idea is ...';
  public items: MenuItem[];

  constructor(private contentService: ContentService, private route: Router) { }

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

  getAll() {
    this.contentService.getAllPosts();
  }

  save() {
    this.contentService.savePost(1);
  }

}
