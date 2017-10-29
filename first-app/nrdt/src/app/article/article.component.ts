import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  article: Article;

  constructor() {
    this.article = new Article(
      'anonymoussc',
      'http://anonymoussc.github.io/',
      10);
  }

  voteUp() {
    this.article.votes += 1;

    return false;
  }

  voteDown() {
    this.article.votes -= 1;

    return false;
  }

  ngOnInit() {
  }

}
