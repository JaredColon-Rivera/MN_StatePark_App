import { Component, OnInit } from '@angular/core';
import { Parks } from '../park.model';
import { ParksService } from '../parks.service';

@Component({
  selector: 'app-central',
  templateUrl: './central.page.html',
  styleUrls: ['./central.page.scss'],
})
export class CentralPage implements OnInit {
  centralParks: Parks[];

  constructor(private parksService: ParksService) { }

  ngOnInit() {
    this.centralParks = this.parksService.centralParks;
  }

}
