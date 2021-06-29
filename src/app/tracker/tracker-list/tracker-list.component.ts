import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service';
import { Tracker } from '../tracker';
import { Router } from '@angular/router';
import * as L from 'leaflet';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker-list.component.html',
  styleUrls: ['./tracker-list.component.css']
})
export class TrackerComponent implements OnInit {

  constructor(  private toastr: ToastrService,private formBuilder: FormBuilder,private trackerService: TrackerService,private router: Router) { }
  trackerForm: FormGroup;
  tracker: Tracker;
  map: any;
  latitud:number;
  longitud:number;
  patronIp:any;
  valores:string[];


  private initMap(lati:number,longit:number): void {
    console.log(lati,longit);
     this.latitud  = lati;
     this.longitud = longit;
    this.map = L.map('map', {
      center: [ this.latitud, this.longitud],
      zoom: 3
    });
    let myIcon = L.icon({
      iconUrl: './assets/icon-location.png',
      iconRetinaUrl: './assets/icon-location.png',
      iconSize: [40, 24],
      iconAnchor: [9, 21],
      popupAnchor: [0, -14]
     });
    L.marker( [this.latitud, this.longitud], {icon: myIcon} );


     const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  getTrack(ip:string) {
    this.trackerService.getAllTracker(ip).subscribe(cs => {
      this.tracker = cs;
      this.initMap(this.tracker.location.lat,this.tracker.location.lng);
    });
  }

  getInit()
  {
    this.trackerService.getIPAddress().subscribe((res:any)=>{
      this.getTrack(res.ip);
    });
  }
  ngOnInit() {
    this.getInit();
    this.trackerForm = this.formBuilder.group({
      ip: ["", [Validators.required, Validators.minLength(4), Validators.maxLength(25)]],
    });
  }

  search(form: any) {
    if(form && form.ip && this.validateIp(form.ip))
       this.getTrack(form.ip);
    else
       this.toastr.error ('Error',"Debe ingresar una ip valida", { "progressBar": true, timeOut: 4000 });
    if(this.trackerForm)
      this.trackerForm.reset();
  }
   validateIp(ip:string) {
    this.patronIp = new RegExp("^([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3})$");
    if(ip.search( this.patronIp) !== 0) {
      return false
    }

    this.valores = ip.split(".");

    return  parseInt(this.valores[0]) <= 255 &&  parseInt(this.valores[1]) <= 255 &&  parseInt(this.valores[2]) <= 255 &&  parseInt(this.valores[3]) <= 255
  }

}
