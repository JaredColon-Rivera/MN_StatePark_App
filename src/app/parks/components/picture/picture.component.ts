import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Parks } from '../../park.model';
import { ParksService } from '../../parks.service';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit {
  selectedPlace: Parks;

  constructor(private modalController: ModalController, private parksService: ParksService) { }

  ngOnInit() {
  }

  onCancel() {
    this.modalController.dismiss(null, "cancel");
  }

}
