import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { IPost } from '../post-form/post-form.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post : IPost;

  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  deletePost() {
    this.deleted.emit();
    console.log("deleted");
  }

}
