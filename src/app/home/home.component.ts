import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'rt-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {


  constructor(private title : Title) {
    this.title.setTitle("Home page load");
  }

  ngOnInit() {
  }

}
