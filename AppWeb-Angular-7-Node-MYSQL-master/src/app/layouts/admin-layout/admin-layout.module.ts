import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';


import { ContatosComponent } from '../../contatos/contatos.component';
import { EmpresasComponent } from '../../empresas/empresas.component';
import { ProdutosComponent } from '../../produtos/produtos.component';
import { TarefasComponent } from '../../tarefas/tarefas.component';
import { VendasComponent } from '../../vendas/vendas.component';

import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';
import { CollapseModule } from 'ngx-bootstrap';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,CollapseModule
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    ContatosComponent,
    EmpresasComponent,
    ProdutosComponent,
    TarefasComponent,
    VendasComponent,
  ]
})

export class AdminLayoutModule {}
