import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';


@NgModule({
    declarations: [
       DashboardComponent

    ],
    imports: [
        BrowserModule,
        DashboardRoutingModule

    ],
    providers: []
})
export class DashboardModule { }
