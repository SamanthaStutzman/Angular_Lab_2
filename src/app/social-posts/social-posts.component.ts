
import { Component, OnInit } from '@angular/core';

import { IPost } from './post-form/post-form.component'

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {
  
  thoughtArray : IPost[] = [
    { title: "Waggy Ruff", thought: "Doggo ipsum waggy wags ruff noodle horse mlem pupperino most angery pupper I have ever seen, clouds doing me a frighten yapper." },
    { title: "Heckin Shoob", thought: "Heckin boofers wrinkler shoob you are doing me a frighten, most angery pupper I have ever seen you are doing me the shock long water shoob." },
    { title: "Good Boy", thought: "Heckin good boys and girls long woofer very hand that feed shibe long woofer heckin good boys and girls vvv, long doggo h*ck corgo." }
  ]

  show : boolean;
  
  constructor() { }
  
  ngOnInit() {
  }
  
  showPostForm() {
    if (this.show === false) {
      this.show = true;
    }
    else if (this.show = true) {
      this.show = false; 
    }
  }

  // @Output() deleted = new EventEmitter();

  onSubmit( post : IPost) {  
    
    if (post.title !== "" && post.thought !== "") {
  
      this.thoughtArray = [post, ...this.thoughtArray];
      this.show = false;
      
    }
  }

  onDelete(index) {
    this.thoughtArray.splice(index, 1);
    console.log("deleted from parent");
  }
}