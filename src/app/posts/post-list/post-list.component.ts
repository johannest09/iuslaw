import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';
import { Router } from '@angular/router';
import { LocalizeRouterService } from 'localize-router';
import { TranslateService } from 'ng2-translate';

@Component({
  moduleId: module.id,
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
  providers: [PostsService]
})
export class PostListComponent implements OnInit {

  posts: Post[];

  constructor(private postsService: PostsService, private router: Router, private translate: TranslateService, private localize: LocalizeRouterService ) {

  }

  getPosts() {
    this.postsService
    .getPosts(this.translate.currentLang, -1)
    .subscribe(res => {
      this.posts = res;
    })
  }

  ngOnInit() {
    this.getPosts();
  }

  selectPost(slug) {
    this.router.navigate([this.translate.currentLang + '/' + this.translate.instant('POST'), slug]);
  }

  ngAfterViewInit() {
    $("#banner h1").addClass("fadeInLeft");
  }

}
