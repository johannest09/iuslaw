import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostListComponent } from './posts/post-list/post-list.component';
import { PostSingleComponent } from './posts/post-single/post-single.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeSingleComponent } from './employees/employee-single/employee-single.component';
import { PracticeAreasListComponent } from './practice-areas/practice-areas-list/practice-areas-list.component';
import { PracticeAreaComponent } from './practice-areas/practice-area/practice-area.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'employees',
    component: EmployeeListComponent
  },
  {
    path: 'employee/:slug',
    component: EmployeeSingleComponent
  },
  {
    path: 'practice-areas',
    component: PracticeAreasListComponent
  },
  {
    path: 'practice-areas/:slug',
    component: PracticeAreaComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'posts',
    component: PostListComponent
  },
  {
    path: 'post/:slug',
    component: PostSingleComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }
      
  
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
