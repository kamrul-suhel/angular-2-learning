import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'rt-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id : string;
  constructor(private title : Title, private activatedRoute : ActivatedRoute) {
    this.title.setTitle("User Title")
    //this.id = activatedRoute.snapshot.params['id'];
    this.id = activatedRoute.params.subscribe(
        (param : any) => this.id = param['id'];
    );
  }

  ngOnInit() {
  }

}
