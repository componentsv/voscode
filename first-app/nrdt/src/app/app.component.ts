import { Component } from '@angular/core';
import { Article } from './article/article.model'; // <-- import this

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles: Article[]; // <-- component property

  constructor() {
    this.articles = [
      new Article('anonymoussc1', 'https://rn.netlify.com/', 3),
      new Article('anonymoussc2', 'http://anonymoussc.github.io/', 2),
      new Article('Angular Homepage', 'http://angular.io', 1),
    ];
  }
}
