import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { AdminLoginComponent } from './pages/admin-login/admin-login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminProductsComponent } from './pages/admin-products/admin-products.component';
import { AdminNewslettersComponent } from './pages/admin-newsletters/admin-newsletters.component';
import { AdminTalentBankComponent } from './pages/admin-talent-bank/admin-talent-bank.component';
import { AdminCareersComponent } from './pages/admin-careers/admin-careers.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Route[] = [
  { path: 'login', component: AdminLoginComponent },
  {
    path: '',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'products', component: AdminProductsComponent },
      { path: 'newsletters', component: AdminNewslettersComponent },
      { path: 'talent-bank', component: AdminTalentBankComponent },
      { path: 'careers', component: AdminCareersComponent },
      { path: '', redirectTo: 'products', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminModule { }
