import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule , DatePipe } from '@angular/common';
import { TrackerRoutingModule } from './tracker-routing.module';
import { TrackerComponent } from './tracker-list/tracker-list.component';
import { TrackerService } from './tracker.service';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [TrackerComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    TrackerRoutingModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [TrackerService]
})
export class TrackerModule { }

