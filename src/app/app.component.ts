import { AfterViewInit, Component } from '@angular/core';
import { Plugins } from '@capacitor/core'
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AdOptions, AdSize, AdPosition } from 'capacitor-admob';

const { AdMob } = Plugins;


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
    AdMob.initialize("ca-app-pub-3940256099942544/6300978111")
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }


  ngOnInit() {
    this.showBanner();
  }


  showBanner() {
    const options: AdOptions = {
      adId: 'ca-app-pub-3940256099942544/6300978111',
      adSize: AdSize.SMART_BANNER,
      position: AdPosition.BOTTOM_CENTER,
      hasTabBar: true,
      tabBarHeight: 56,
      isTesting: true
    };

    // Show Banner Ad
    AdMob.showBanner(options)
      .then(
        async (value) => {
          console.log(value);  // true

        },
        (error) => {
          console.error(error); // show error
        }
      );
    AdMob.addListener('onAdLoaded', async (info: boolean) => {
      console.log('Showing Banner AD.');
    });
  }

}
