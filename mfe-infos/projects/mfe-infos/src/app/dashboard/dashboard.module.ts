import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
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
        DashboardRoutingModule,
        MatFormFieldModule,
        MatToolbarModule

    ],
    providers: []
})
export class DashboardModule { }
