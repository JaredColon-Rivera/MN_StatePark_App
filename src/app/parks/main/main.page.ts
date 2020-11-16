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
  northParks: Parks[];
  southParks: Parks[];
  eastParks: Parks[];
  westParks: Parks[];

  constructor(private parksService: ParksService) { }

  ngOnInit() {
    this.metroParks = this.parksService.metroParks;
    this.centralParks = this.parksService.centralParks;
  }

}
