import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PlanosRoutingModule } from './planos-routing.module';
import { PlanosComponent } from './planos.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
       PlanosComponent

    ],
    imports: [
        CommonModule,
        PlanosRoutingModule,
        FormsModule,
        HttpClientModule,
        MatToolbarModule,
        ReactiveFormsModule

    ],
    providers: []
})
export class PlanosModule { }
