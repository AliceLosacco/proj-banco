import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FotoRoutingModule } from './foto-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        FotoComponent
    ],
    imports: [
        CommonModule,
        FotoRoutingModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    providers: []
})

export class FotoModule { }
