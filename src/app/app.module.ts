import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { firebaseConfig } from '../config';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TrackCampaignPage } from '../pages/track-campaign/track-campaign';
import { AuthserviceProvider } from '../providers/authservice/authservice';


import { AngularFireModule } from 'angularfire2';
 import { AngularFireAuth } from 'angularfire2/auth';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { ArchivedCampaignsDetailsPage } from '../pages/archived-campaigns-details/archived-campaigns-details';
import { LeadsDetailsPage } from '../pages/leads-details/leads-details';
import { TaskDetailsPage } from '../pages/task-details/task-details';
import { EditCampaignsDetailsPage } from '../pages/edit-campaigns-details/edit-campaigns-details';
import { EditLeadDetailsPage } from '../pages/edit-lead-details/edit-lead-details';
import { CallDetailsPage } from '../pages/call-details/call-details';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage, 
    TrackCampaignPage,
    AccountPage,
    ArchivedCampaignsDetailsPage,
    LeadsDetailsPage,
    TaskDetailsPage,
    EditCampaignsDetailsPage,
    EditLeadDetailsPage,
    CallDetailsPage
   
  ],
  imports: [
    
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig.fire),
    AngularFireModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    TrackCampaignPage,
    AccountPage,
    ArchivedCampaignsDetailsPage,
    LeadsDetailsPage,
    TaskDetailsPage,
    EditCampaignsDetailsPage,
    EditLeadDetailsPage,
    CallDetailsPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthserviceProvider,
     AngularFireModule,
    AuthserviceProvider ,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
