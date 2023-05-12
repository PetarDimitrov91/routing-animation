import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FirstComponentComponent} from './first-component/first-component.component';
import {SecondComponentComponent} from './second-component/second-component.component';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {path: 'page1', component: FirstComponentComponent, data: {animation: 'Page1'}},
  {path: 'page2', component: SecondComponentComponent, data: {animation: 'Page2'}},

];

@NgModule({
  declarations: [
    AppComponent,
    FirstComponentComponent,
    SecondComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
