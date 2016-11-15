import { Component } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'rt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing project';
  constructor(private title : Title){
  }

  public setTitle( newTitle: string) {
    this.title.setTitle( newTitle );
  }
}
