import { Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { canAuthGuard } from './shared/guards/can-auth.guard';
import { RoleEnum } from './shared/enums/roles.enum';

export const routes: Routes = [
  {
    path:'dashboard',
    pathMatch:'full',
    component: DashboardComponent,
    canActivate: [canAuthGuard],
    data:{
      roles : [RoleEnum.ADMIN, RoleEnum.USER]
    }
  }
];
