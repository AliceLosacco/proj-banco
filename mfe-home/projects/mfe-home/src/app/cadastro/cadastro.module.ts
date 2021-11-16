import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CadastroComponent } from './cadastro.component';
import { CadastroRoutingModule } from './cadastro-routing.module';


@NgModule({
    declarations: [
        CadastroComponent
    ],
    imports: [
        BrowserModule,
        CadastroRoutingModule,
        FormsModule,
        HttpClientModule,
        MatToolbarModule,
        ReactiveFormsModule
    ],
    providers: []
})

export class CadastroModule { }
