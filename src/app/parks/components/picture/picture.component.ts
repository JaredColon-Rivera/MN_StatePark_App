import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Parks } from '../../park.model';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss'],
})
export class PictureComponent implements OnInit {
  selectedPlace: Parks;

  constructor(private modalController: ModalController) { }

  ngOnInit() {

  }

  onCancel() {
    this.modalController.dismiss(null, "cancel");
  }

}
