import { Component, OnInit } from '@angular/core';
import { Parks } from '../park.model';
import { ParksService } from '../parks.service';

@Component({
  selector: 'app-southwest',
  templateUrl: './southwest.page.html',
  styleUrls: ['./southwest.page.scss'],
})
export class SouthwestPage implements OnInit {
  southwestParks: Parks[]

  constructor(private parksService: ParksService) { }

  ngOnInit() {
    this.southwestParks = this.parksService.southwestParks;
  }

}
