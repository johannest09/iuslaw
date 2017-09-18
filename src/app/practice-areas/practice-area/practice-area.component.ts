import { Component, OnInit } from '@angular/core';
import { PracticeArea } from '../practice-area';
import { PracticeAreaService } from '../practice-area.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import { LocalizeRouterService } from 'localize-router';

@Component({
  moduleId: module.id,
  selector: 'app-practice-area',
  templateUrl: './practice-area.component.html',
  styleUrls: ['./practice-area.component.css'],
  providers: [ PracticeAreaService ]
})
export class PracticeAreaComponent implements OnInit {

  practiceArea: PracticeArea;
  private _selectedlanguage: string;

  constructor(
    private practiceAreaService: PracticeAreaService, 
    private route: ActivatedRoute,
    private translate: TranslateService, 
    private localize: LocalizeRouterService) {

      this.translate.onLangChange.subscribe((params: {lang: string, translations: any}) => {
        this._selectedlanguage = params.lang;
      });

    }

  getPracticeArea(slug) {
    this.practiceAreaService
      .getPracticeArea(slug)
      .subscribe(res => {
        this.practiceArea = res[0];
      });
  }

  selectedlanguage() {
    this._selectedlanguage = this.localize.parser.currentLang;
  }

  ngOnInit() {
    this.selectedlanguage();
    this.route.params.forEach((params: Params) => {
      let slug = params['slug'];
      this.getPracticeArea(slug);
    });
  }

}
