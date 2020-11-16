import { Component, OnInit } from '@angular/core';
import { Parks } from '../park.model';
import { ParksService } from '../parks.service';

@Component({
  selector: 'app-metro',
  templateUrl: './metro.page.html',
  styleUrls: ['./metro.page.scss'],
})
export class MetroPage implements OnInit {
  metroParks: Parks[];

  constructor(private parksService: ParksService) { }

  ngOnInit() {
    this.metroParks = this.parksService.metroParks;
  }

}
