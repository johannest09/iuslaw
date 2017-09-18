import { Component, OnInit } from '@angular/core';
declare var $:JQueryStatic;

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $("#banner .banner-overlay").show().addClass("fadeInLeft");
  }

}
