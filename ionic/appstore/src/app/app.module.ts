import { TwiPage } from './../pages/twi/twi';
import { LolPage } from './../pages/lol/lol';
import { AmongPage } from './../pages/among/among';
import { TabsPageModule } from './../pages/tabs/tabs.module';
import { SearchPage } from './../pages/search/search';
import { AppPage } from './../pages/app/app';
import { GamePage } from './../pages/game/game';
import { RecomPage } from './../pages/recom/recom';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MypagePage } from '../pages/mypage/mypage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RecomPage,
    GamePage,
    AppPage,
    SearchPage,
    MypagePage,
    AmongPage,
    LolPage,
    TwiPage
  ],
  imports: [
    TabsPageModule,
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RecomPage,
    GamePage,
    AppPage,
    SearchPage,
    MypagePage,
    AmongPage,
    LolPage,
    TwiPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
