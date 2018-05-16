import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ProgramaPage } from '../pages/programa/programa';
import { SobrePage } from '../pages/sobre/sobre';
import { ContatoPage } from '../pages/contato/contato';
import { TabsPage } from '../pages/tabs/tabs';

import { IntroPage } from '../pages/intro/intro';
import { Capitulo1Page } from '../pages/capitulo1/capitulo1';
import { Capitulo2Page } from '../pages/capitulo2/capitulo2';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = TabsPage;
  pages : Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen) 
  {
    this.initializeApp();
    this.pages = [
      {title : 'Home', component: TabsPage},
      {title : 'Introdução', component: IntroPage},
      {title : 'Capitulo I', component: Capitulo1Page},
      {title : 'Capitulo II', component: Capitulo2Page}
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
  }

}

