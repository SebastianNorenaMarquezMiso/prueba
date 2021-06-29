import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrackerComponent } from './tracker-list/tracker-list.component';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [{
  path: 'trackers',
  children: [
    {
      path: 'list',
      component: TrackerComponent
    },
    {
      path: ':id',
      component: TrackerComponent,
      runGuardsAndResolvers: 'always'
    },

  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes),BrowserModule],
  exports: [RouterModule]
})
export class TrackerRoutingModule { }
