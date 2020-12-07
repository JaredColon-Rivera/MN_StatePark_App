import { Component, OnInit } from '@angular/core';
import { Parks } from '../park.model';
import { ParksService } from '../parks.service';

@Component({
  selector: 'app-northwest',
  templateUrl: './northwest.page.html',
  styleUrls: ['./northwest.page.scss'],
})
export class NorthwestPage implements OnInit {

  northwestParks: Parks[]

  constructor(private parksService: ParksService) { }

  ngOnInit() {
    this.northwestParks = this.parksService.northwestParks;
  }

}
