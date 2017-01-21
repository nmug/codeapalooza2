import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PairingComponent } from './pairing.component';
import { AboutComponent } from './about.component';
import { YelpComponent } from './yelp.component';

const routes: Routes = [
  { path: '', redirectTo: '/pairing', pathMatch: 'full' },
  { path: 'pairing',  component: PairingComponent },
  { path: 'about', component: AboutComponent },
  { path: 'yelp', component: YelpComponent },
];

@NgModule({
    bootstrap: [ AppComponent ],
    imports: [ 
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpModule
    ],
    declarations: [ 
        AppComponent, 
        PairingComponent, 
        AboutComponent, 
        YelpComponent
    ],
})
export class AppModule { }