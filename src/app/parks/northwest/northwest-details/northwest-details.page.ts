import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { PictureComponent } from '../../components/picture/picture.component';
import { Parks } from '../../park.model';
import { ParksService } from '../../parks.service';

@Component({
  selector: 'app-northwest-details',
  templateUrl: './northwest-details.page.html',
  styleUrls: ['./northwest-details.page.scss'],
})
export class NorthwestDetailsPage implements OnInit {
  northwestPark: Parks;
  public locatedWeather: any;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private parksService: ParksService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("northwestParkId")) {
        this.navCtrl.navigateBack("/parks/tabs/northwest");
        return;
      }
      this.northwestPark = this.parksService.getNorthwestParks(paramMap.get("northwestParkId"));
    })
  }

  ngAfterViewInit() {
    this.parksService.getWeather(this.northwestPark.zipcode).subscribe(data => {
      this.locatedWeather = data;
    });
  }

  onPictureClick() {
    this.modalController.create({
      component: PictureComponent,
      componentProps: { selectedPlace: this.northwestPark },
    }).then((modalEl) => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
  }
}
