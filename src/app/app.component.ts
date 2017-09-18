import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';
import { LocalizeRouterService } from 'localize-router';
import { Router, RouterModule, ActivatedRoute, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'IUS lögmenn';
  private _currentRoute;

  constructor(private translate: TranslateService, private localize: LocalizeRouterService, private route: ActivatedRoute, private router: Router) {

    translate.addLangs(["is", "en"]);
    translate.setDefaultLang('is');

    //console.log(translate.getBrowserLang())

    // Need to do this since localize router uses the following to set default lang
    // cached language in LocalStorage (browser only) or
    // current language of the browser (browser only) or
    // first locale in the config

    window.setTimeout(function(){
      localize.changeLanguage('is');
    }, 100);
    
    this.router.events
    .filter(event => event instanceof NavigationEnd)
    .subscribe(event => {
      let currentRoute = this.route.root;
      while (currentRoute.children[0] !== undefined) {
        currentRoute = currentRoute.children[0];
      }
      this._currentRoute = currentRoute;
      })
  }

  changeLanguage(lang: string) {
    this.localize.changeLanguage(lang);
  }

}

