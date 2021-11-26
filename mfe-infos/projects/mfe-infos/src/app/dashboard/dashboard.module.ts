import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
       DashboardComponent

    ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        MatFormFieldModule,
        MatToolbarModule

    ],
    providers: []
})
export class DashboardModule { }
