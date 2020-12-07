import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { PictureComponent } from '../../components/picture/picture.component';
import { Parks } from '../../park.model';
import { ParksService } from '../../parks.service';

@Component({
  selector: 'app-northeast-details',
  templateUrl: './northeast-details.page.html',
  styleUrls: ['./northeast-details.page.scss'],
})
export class NortheastDetailsPage implements OnInit {
  northeastPark: Parks;
  public locatedWeather: any;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private parksService: ParksService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("northeastParkId")) {
        this.navCtrl.navigateBack("/parks/tabs/northeast");
        return;
      }
      this.northeastPark = this.parksService.getNortheastParks(paramMap.get("northeastParkId"));
    })
  }

  ngAfterViewInit() {
    this.parksService.getWeather(this.northeastPark.zipcode).subscribe(data => {
      this.locatedWeather = data;
    });
  }

  onPictureClick() {
    this.modalController.create({
      component: PictureComponent,
      componentProps: { selectedPlace: this.northeastPark },
    }).then((modalEl) => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
  }
}
