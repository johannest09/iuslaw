import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

import { Router } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import { LocalizeRouterService } from 'localize-router';

@Component({
  moduleId: module.id,
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  providers: [EmployeeService]
})


export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  private _selectedlanguage: string;
  
  constructor(
    private employeeService: EmployeeService, 
    private router: Router, 
    private translate: TranslateService, 
    private localize: LocalizeRouterService) 
    {

      translate.addLangs(["is", "en"]);
      translate.setDefaultLang('is');

      
      /*
      let browserLang = translate.getBrowserLang();
      translate.use(browserLang.match(/is|en/) ? browserLang : 'is');
      */
      //this.localize.changeLanguage(browserLang.match(/is|en/) ? browserLang : 'is');
      //this.localize.changeLanguage('is');

      this.translate.onLangChange.subscribe((params: {lang: string, translations: any}) => {
        this._selectedlanguage = params.lang;
      });
    }

  getEmployees() {
    this.employeeService
    .getEmployees()
    .subscribe(res => {
      this.employees = res;
    })
  }

  selectEmployee(slug) {
    console.log(this.translate.currentLang + '/' + this.translate.instant('EMPLOYEE'));
    this.router.navigate([this.translate.currentLang + '/' + this.translate.instant('EMPLOYEE'), slug]);
  }

  selectedlanguage() {
    this._selectedlanguage = this.localize.parser.currentLang;
  }

  ngOnInit() {
    this.selectedlanguage();
    this.getEmployees();
    
  }

  ngAfterViewInit() {
    $("#banner h1").addClass("fadeInLeft");
  }

}
