import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CadastroComponent } from './cadastro.component';
import { CadastroRoutingModule } from './cadastro-routing.module';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        CadastroComponent
    ],
    imports: [
        CadastroRoutingModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        MatToolbarModule,
        ReactiveFormsModule
    ],
    providers: []
})

export class CadastroModule { }
