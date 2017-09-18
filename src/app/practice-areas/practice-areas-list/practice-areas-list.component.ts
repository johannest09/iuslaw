import { Component, OnInit } from '@angular/core';
import { PracticeArea } from '../practice-area';
import { PracticeAreaService } from '../practice-area.service';

import { Router } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import { LocalizeRouterService } from 'localize-router';


@Component({
  moduleId: module.id,
  selector: 'app-practice-areas-list',
  templateUrl: './practice-areas-list.component.html',
  styleUrls: ['./practice-areas-list.component.css'],
  providers: [PracticeAreaService]
})
export class PracticeAreasListComponent implements OnInit {

  practiceAreas: PracticeArea[];
  private _selectedlanguage: string;

  constructor(
    private practiceAreaService: PracticeAreaService,
    private router: Router, 
    private translate: TranslateService, 
    private localize: LocalizeRouterService) 
    {
      translate.addLangs(["is", "en"]);
      translate.setDefaultLang('is');

      this.translate.onLangChange.subscribe((params: {lang: string, translations: any}) => {
        this._selectedlanguage = params.lang;
      });
    }


  selectedlanguage() {
    this._selectedlanguage = this.localize.parser.currentLang;
  }

  getPracticeAreas() {
    this.practiceAreaService
    .getPracticeAreas()
    .subscribe(res => {
      this.practiceAreas = res;
    })
  }

  selectPracticeArea(slug) {
    this.router.navigate([this.translate.currentLang + '/' + this.translate.instant('ROUTES.practice-areas'), slug]);
  }

  ngOnInit() {
    this.selectedlanguage();
    this.getPracticeAreas();
  }

  ngAfterViewInit() {
    $("#banner h1").addClass("fadeInLeft");
  }

  

}
