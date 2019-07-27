import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  getAllPosts() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/')
      .subscribe((response) => {
        console.log('Data Fetched', response);
        return response;
      });
  }

  savePost(content) {
    this.http.post('https://jsonplaceholder.typicode.com/posts/', content)
      .subscribe((response) => {
        console.log(response);
      });
  }


}
