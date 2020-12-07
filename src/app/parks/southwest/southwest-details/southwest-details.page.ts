import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { PictureComponent } from '../../components/picture/picture.component';
import { Parks } from '../../park.model';
import { ParksService } from '../../parks.service';

@Component({
  selector: 'app-southwest-details',
  templateUrl: './southwest-details.page.html',
  styleUrls: ['./southwest-details.page.scss'],
})
export class SouthwestDetailsPage implements OnInit {
  southwestPark: Parks;
  public locatedWeather: any;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private parksService: ParksService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("southwestParkId")) {
        this.navCtrl.navigateBack("/parks/tabs/southwest");
        return;
      }
      this.southwestPark = this.parksService.getSouthwestParks(paramMap.get("southwestParkId"));
    })
  }

  ngAfterViewInit() {
    this.parksService.getWeather(this.southwestPark.zipcode).subscribe(data => {
      this.locatedWeather = data;
    });
  }

  onPictureClick() {
    this.modalController.create({
      component: PictureComponent,
      componentProps: { selectedPlace: this.southwestPark },
    }).then((modalEl) => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
  }
}
