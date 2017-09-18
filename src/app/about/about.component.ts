import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import { AboutService } from './about.service';
import { LocalizeRouterService } from 'localize-router';
import { About } from './about';

@Component({
  moduleId: module.id,
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  providers: [ AboutService ]
})

export class AboutComponent implements OnInit {

  private _selectedlanguage: string;
  about: About[];

  constructor(
    private route: ActivatedRoute,
    private translate: TranslateService, 
    private localize: LocalizeRouterService,
    private aboutService: AboutService
  ) { 
    this.translate.onLangChange.subscribe((params: {lang: string, translations: any}) => {
      this._selectedlanguage = params.lang;
    });
  }

  getAbouts() {
    this.aboutService
    .getAbouts()
    .subscribe(res => { this.about = res } )
  }

  selectedlanguage() {
    this._selectedlanguage = this.localize.parser.currentLang;
  }

  ngOnInit() {
    this.selectedlanguage();
    this.getAbouts();
    
  }

  ngAfterViewInit() {
    $("#banner h1").addClass("fadeInLeft");
  }

}

