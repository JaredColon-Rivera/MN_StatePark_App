import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { PictureComponent } from '../../components/picture/picture.component';
import { Parks } from '../../park.model';
import { ParksService } from '../../parks.service';

@Component({
  selector: 'app-central-details',
  templateUrl: './central-details.page.html',
  styleUrls: ['./central-details.page.scss'],
})
export class CentralDetailsPage implements OnInit {
  centralPark: Parks;
  public locatedWeather: any;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private parksService: ParksService,
    private modalController: ModalController
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

  ngAfterViewInit() {
    this.parksService.getWeather(this.centralPark.zipcode).subscribe(data => {
      this.locatedWeather = data;
    });
  }

  onPictureClick() {
    this.modalController.create({
      component: PictureComponent,
      componentProps: { selectedPlace: this.centralPark },
    }).then((modalEl) => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
  }
}
