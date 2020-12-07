import { Component, OnInit } from '@angular/core';
import { Parks } from '../park.model';
import { ParksService } from '../parks.service';

@Component({
  selector: 'app-southeast',
  templateUrl: './southeast.page.html',
  styleUrls: ['./southeast.page.scss'],
})
export class SoutheastPage implements OnInit {
  southeastParks: Parks[];

  constructor(private parksService: ParksService) { }

  ngOnInit() {
    this.southeastParks = this.parksService.southeastParks;
  }

}
