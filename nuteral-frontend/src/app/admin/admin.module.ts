import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminProductsComponent } from './pages/admin-products/admin-products.component';
import { AdminNewslettersComponent } from './pages/admin-newsletters/admin-newsletters.component';
import { AdminTalentBankComponent } from './pages/admin-talent-bank/admin-talent-bank.component';
import { AdminCareersComponent } from './pages/admin-careers/admin-careers.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  { path: 'login', component: AdminLoginComponent },
  {
    path: '',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'products', component: AdminProductsComponent },
      { path: 'newsletters', component: AdminNewslettersComponent },
      { path: 'talent-bank', component: AdminTalentBankComponent },
      { path: 'careers', component: AdminCareersComponent }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminProductsComponent,
    AdminNewslettersComponent,
    AdminTalentBankComponent,
    AdminCareersComponent
  ],
  exports: [RouterModule]
})
export class AdminModule { }
