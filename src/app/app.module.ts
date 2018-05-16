import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProgramaPage } from '../pages/programa/programa';
import { SobrePage } from '../pages/sobre/sobre';
import { ContatoPage } from '../pages/contato/contato';
import { TabsPage } from '../pages/tabs/tabs';
import { IntroPage } from '../pages/intro/intro';
import { Capitulo1Page } from '../pages/capitulo1/capitulo1';
import { Capitulo2Page } from '../pages/capitulo2/capitulo2';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SobrePage,
    ProgramaPage,
    ContatoPage,
    TabsPage,
    IntroPage,
    Capitulo1Page,
    Capitulo2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProgramaPage,
    ContatoPage,
    SobrePage,
    TabsPage,
    IntroPage,
    Capitulo1Page,
    Capitulo2Page    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
