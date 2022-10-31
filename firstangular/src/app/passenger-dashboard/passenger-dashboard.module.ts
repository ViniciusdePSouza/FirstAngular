import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

//containers
import { PassengerDashboardComponent } from './containers/passenger-dashboard/passenger-dashboard.component';

//components
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailsComponent } from './components/passenger-details/passenger-details.component'

//services 
import { PassengerDashboardService } from './passenger-dashboard.service'

@NgModule({
    declarations: [
        PassengerDashboardComponent,
        PassengerCountComponent,
        PassengerDetailsComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        HttpClientModule
    ],
    exports: [
        PassengerDashboardComponent
    ],

    providers: [
        PassengerDashboardService
    ]
})
export class PassengerDashboardModule {}