import { Component, OnInit } from '@angular/core';
import { Parks } from '../park.model';
import { ParksService } from '../parks.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  metroParks: Parks[];
  centralParks: Parks[];
  northeastParks: Parks[];
  northwestParks: Parks[];
  southeastParks: Parks[];
  southwestParks: Parks[]

  constructor(private parksService: ParksService) { }

  ngOnInit() {
    this.metroParks = this.parksService.metroParks;
    this.centralParks = this.parksService.centralParks;
    this.northeastParks = this.parksService.northeastParks;
    this.northwestParks = this.parksService.northwestParks;
    this.southeastParks = this.parksService.southeastParks;
    this.southwestParks = this.parksService.southwestParks;
  }

}
