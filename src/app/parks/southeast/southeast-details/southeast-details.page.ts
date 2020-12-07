import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { PictureComponent } from '../../components/picture/picture.component';
import { Parks } from '../../park.model';
import { ParksService } from '../../parks.service';

@Component({
  selector: 'app-southeast-details',
  templateUrl: './southeast-details.page.html',
  styleUrls: ['./southeast-details.page.scss'],
})
export class SoutheastDetailsPage implements OnInit {
  southeastPark: Parks;
  public locatedWeather: any;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private parksService: ParksService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("southeastParkId")) {
        this.navCtrl.navigateBack("/parks/tabs/southeast");
        return;
      }
      this.southeastPark = this.parksService.getSoutheastParks(paramMap.get("southeastParkId"));
    })
  }

  ngAfterViewInit() {
    this.parksService.getWeather(this.southeastPark.zipcode).subscribe(data => {
      this.locatedWeather = data;
    });
  }

  onPictureClick() {
    this.modalController.create({
      component: PictureComponent,
      componentProps: { selectedPlace: this.southeastPark },
    }).then((modalEl) => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
  }
}
