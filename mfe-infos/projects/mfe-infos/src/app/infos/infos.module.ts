import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfosRoutingModule } from './infos-routing.module';
import { InfosComponent } from './infos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
       InfosComponent

    ],
    imports: [
        BrowserModule,
        InfosRoutingModule,
        FormsModule,
        HttpClientModule,
        MatToolbarModule,
        ReactiveFormsModule

    ],
    providers: []
})
export class InfosModule { }
