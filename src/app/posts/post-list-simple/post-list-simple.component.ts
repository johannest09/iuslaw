import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { Quote } from '../quote';
import { IntroText } from '../introText';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { LocalizeRouterService } from 'localize-router';
import { TranslateService, LangChangeEvent } from 'ng2-translate';


@Component({
  moduleId: module.id,
  selector: 'app-post-list-simple',
  templateUrl: './post-list-simple.component.html',
  styleUrls: ['./post-list-simple.component.css'],
  providers: [PostsService]
})
export class PostListSimpleComponent implements OnInit {
  
  posts: Post[];
  quotes: Quote[];
  introText: IntroText[];

  constructor(private postsService: PostsService, private router: Router, private translate: TranslateService, private localize: LocalizeRouterService) {

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.getFrontPageQuote();
      this.getFrontPageIntroductionText();
      this.getPosts();
    });
   }

  getPosts() {
    this.postsService
    .getPosts(this.translate.currentLang, 2)
    .subscribe(res => {
      this.posts = res;
    })
  }

  getFrontPageQuote() {
    this.postsService.getFrontPageQuote(this.translate.currentLang)
    .subscribe(res => {
      this.quotes = res;
    })
  }

  getFrontPageIntroductionText() {
    this.postsService.getFrontPageIntroductionText(this.translate.currentLang)
    .subscribe(res => {
      this.introText = res;
    })
  }

  selectPost(slug) {
    this.router.navigate([this.translate.currentLang + '/' + this.translate.instant('POST'), slug]);
  }

  ngOnInit() {
    this.getFrontPageQuote();
    this.getFrontPageIntroductionText();
    this.getPosts();
  }


}
