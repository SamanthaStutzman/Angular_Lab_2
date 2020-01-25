import { Component, OnInit, EventEmitter, Output } from '@angular/core';


export interface IPost {
  title : string;
  thought : string;
}

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})

export class PostFormComponent implements OnInit {

  @Output() submitted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  submitPost(title, thought) {
    this.submitted.emit({title, thought})
  }

}