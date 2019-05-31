import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { BindingDataComponent } from './components/binding-data/binding-data.component';

import { ObservableComponent } from './components/observable/observable.component';
import { HttpGetComponent } from './components/http-get/http-get.component';

import { NgForIfSwitchComponent } from './components/ng-for-if-switch/ng-for-if-switch.component';
import { NgClassStyleComponent } from './components/ng-class-style/ng-class-style.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { InputParentComponent } from './components/input-output/input-parent/input-parent.component';
import { InputChildComponent } from './components/input-output/input-parent/input-child/input-child.component';
import { OutputParentComponent } from './components/input-output/output-parent/output-parent.component';
import { OutputChildComponent } from './components/input-output/output-parent/output-child/output-child.component';
import { PipeComponent } from './components/pipe-ex/pipe.component';
import { NavigatePage1Component } from './components/navigate-page1/navigate-page1.component';
import { NavigatePage2Component } from './components/navigate-page2/navigate-page2.component';
import { NotFoundComponent } from './components/not-found/not-found.component';



@NgModule({
  declarations: [
    AppComponent,
    BindingDataComponent,
    ObservableComponent,
    HttpGetComponent,
    NgForIfSwitchComponent,
    NgClassStyleComponent,
    InputOutputComponent,
    InputParentComponent,
    InputChildComponent,
    OutputParentComponent,
    OutputChildComponent,
    PipeComponent,
    NavigatePage1Component,
    NavigatePage2Component,
    NotFoundComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
