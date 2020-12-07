import { Component, OnInit } from '@angular/core';
import { Parks } from '../park.model';
import { ParksService } from '../parks.service';

@Component({
  selector: 'app-northeast',
  templateUrl: './northeast.page.html',
  styleUrls: ['./northeast.page.scss'],
})
export class NortheastPage implements OnInit {
  northeastParks: Parks[];

  constructor(private parksService: ParksService) { }

  ngOnInit() {
    this.northeastParks = this.parksService.northeastParks;
  }
}
