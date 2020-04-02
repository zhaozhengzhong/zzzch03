import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;
  imgUrl: string;
  url: string
  constructor() {
    this.title = "aaa";
    this.imgUrl = './assets/imgs/aa.jpg';
    this.url = 'http://www.4399.com';
  }
  onBtn() {
    console.log(1);
  }
  onIpt(evt: Event) {
    this.title = (<HTMLInputElement>evt.target).value
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
}

