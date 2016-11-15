import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import { Router } from '@angular/router';

@Component({
  selector: 'rt-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor(private title : Title, private router : Router) {
    this.title.setTitle("About us Title");
  }
  onHomepage(){
    this.router.navigate(['/']);
  }

  ngOnInit() {
  }

}
