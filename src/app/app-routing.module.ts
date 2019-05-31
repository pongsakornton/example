import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BindingDataComponent } from './components/binding-data/binding-data.component';


import { HttpGetComponent } from './components/http-get/http-get.component';
import { NgForIfSwitchComponent } from './components/ng-for-if-switch/ng-for-if-switch.component';
import { NgClassStyleComponent } from './components/ng-class-style/ng-class-style.component';
import { InputOutputComponent } from './components/input-output/input-output.component';
import { PipeComponent } from './components/pipe-ex/pipe.component';
import { NavigatePage1Component } from './components/navigate-page1/navigate-page1.component';
import { NavigatePage2Component } from './components/navigate-page2/navigate-page2.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const routes: Routes = [
  {
    path:"",
    redirectTo:"/binding-data",
    pathMatch:"full"
  },
  {path:"binding-data" ,component:BindingDataComponent},
  {path:"ng-calss-style",component:NgClassStyleComponent},
  {path:"http-get",component:HttpGetComponent},
  {path:"ng-for-if-switch",component:NgForIfSwitchComponent},
  {path:"input-output",component:InputOutputComponent},
  {path:"pipe",component:PipeComponent},
  {path:"navigate-page1",component:NavigatePage1Component},
  {path:"navigate-page2",component:NavigatePage2Component},
  {path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
