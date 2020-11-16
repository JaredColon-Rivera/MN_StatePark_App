import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Parks } from '../../park.model';
import { ParksService } from '../../parks.service';

@Component({
  selector: 'app-central-details',
  templateUrl: './central-details.page.html',
  styleUrls: ['./central-details.page.scss'],
})
export class CentralDetailsPage implements OnInit {
  centralPark: Parks;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private parksService: ParksService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("centralParkId")) {
        this.navCtrl.navigateBack("/parks/tabs/central");
        return;
      }
      this.centralPark = this.parksService.getCentralParks(paramMap.get("centralParkId"));
    })
  }
}
