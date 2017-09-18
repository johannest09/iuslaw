import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateStaticLoader, TranslateLoader, TranslateService } from 'ng2-translate';
import { LocalizeRouterModule, StaticParserLoader, LocalizeParser, ManualParserLoader } from 'localize-router/localize-router';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { IUSRoutingModule } from './app-routing.module';
import { AccordionModule, ButtonsModule } from 'ng2-bootstrap';

import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeSingleComponent } from './employees/employee-single/employee-single.component';
import { PracticeAreaComponent } from './practice-areas/practice-area/practice-area.component';

import { GridFilterPipe } from './pipes/grid.pipe';
import { PostListSimpleComponent } from './posts/post-list-simple/post-list-simple.component';
import { PracticeAreasListComponent } from './practice-areas/practice-areas-list/practice-areas-list.component';
import { ContactComponent } from './contact/contact.component';

export function createTranslateLoader(http: Http) {
  return new TranslateStaticLoader(http, '/assets/locales', '.json');
}

export function localizeLoaderFactory(translate: TranslateService, location: Location) {
  //return new StaticParserLoader(translate, http);
  //return new ManualParserLoader(translate, ['is','en'], 'ROUTES');
}

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSingleComponent,
    HomeComponent,
    AboutComponent,
    EmployeeListComponent,
    PracticeAreasListComponent,
    PracticeAreaComponent,
    EmployeeSingleComponent,
    GridFilterPipe,
    PostListSimpleComponent,
    ContactComponent
  ],
  imports: [
    NgbModule.forRoot(),
    HttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http],
    }),
    LocalizeRouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    AccordionModule.forRoot(),
    ButtonsModule.forRoot(),
    IUSRoutingModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
