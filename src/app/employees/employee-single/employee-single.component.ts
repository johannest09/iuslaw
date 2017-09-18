import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TranslateService } from 'ng2-translate';
import { LocalizeRouterService } from 'localize-router';

@Component({
  moduleId: module.id,
  selector: 'app-employee-single',
  templateUrl: './employee-single.component.html',
  styleUrls: ['./employee-single.component.css'],
  providers: [ EmployeeService ]
})
export class EmployeeSingleComponent implements OnInit {

  employee: Employee;
  private _selectedlanguage: string;

  constructor( 
    private employeeService: EmployeeService, 
    private route: ActivatedRoute,
    private translate: TranslateService, 
    private localize: LocalizeRouterService) 
    {

      this.translate.onLangChange.subscribe((params: {lang: string, translations: any}) => {
        this._selectedlanguage = params.lang;
      });
    }

  getEmployee(slug) {
    this.employeeService
      .getEmployee(slug)
      .subscribe(res => {
        this.employee = res[0];
      });
  }
  selectedlanguage() {
    this._selectedlanguage = this.localize.parser.currentLang;
  }

  ngOnInit() {
    this.selectedlanguage();
    this.route.params.forEach((params: Params) => {
      let slug = params['slug'];
      this.getEmployee(slug);
    });

  }

}
