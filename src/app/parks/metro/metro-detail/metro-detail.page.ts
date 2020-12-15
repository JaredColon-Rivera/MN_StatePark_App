import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { PictureComponent } from '../../components/picture/picture.component';
import { Parks } from '../../park.model';
import { ParksService } from '../../parks.service';

@Component({
  selector: 'app-metro-detail',
  templateUrl: './metro-detail.page.html',
  styleUrls: ['./metro-detail.page.scss'],
})
export class MetroDetailPage implements OnInit, AfterViewInit {
  metroPark: Parks;
  private componentProperty: any;
  public locatedWeather: any;
  constructor(
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private parksService: ParksService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("metroParkId")) {
        this.navCtrl.navigateBack("/parks/tabs/metro");
        return;
      }
      this.metroPark = this.parksService.getMetroParks(paramMap.get("metroParkId"));
    })
  }

  ngAfterViewInit() {
    this.parksService.getWeather(this.metroPark.zipcode).subscribe(data => {
      this.locatedWeather = data;
    });
  }

  async onPictureClick() {
    await this.modalController.create({
      component: PictureComponent,
      componentProps: { selectedPlace: this.metroPark },
    }).then(async (modalEl) => {
      return await modalEl.present();
    })
  }

}
