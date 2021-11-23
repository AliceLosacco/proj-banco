import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InfosRoutingModule } from './infos-routing.module';
import { InfosComponent } from './infos.component';


@NgModule({
    declarations: [
       InfosComponent

    ],
    imports: [
        BrowserModule,
        InfosRoutingModule,
        HttpClientModule,
        MatToolbarModule,

    ],
    providers: []
})
export class InfosModule { }
