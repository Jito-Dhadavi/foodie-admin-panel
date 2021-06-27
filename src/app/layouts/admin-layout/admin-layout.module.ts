import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent }       from '../../pages/dashboard/dashboard.component';
import { UserComponent }            from '../../pages/user/user.component';
import { TableComponent }           from '../../pages/table/table.component';
import { TypographyComponent }      from '../../pages/typography/typography.component';
import { IconsComponent }           from '../../pages/icons/icons.component';
import { NotificationsComponent }   from '../../pages/notifications/notifications.component';
import { UpgradeComponent }         from '../../pages/upgrade/upgrade.component';

import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from 'app/pages/profile/profile.component';
import { CategoryComponent } from 'app/pages/category/category.component';
import { UsersComponent } from 'app/pages/users/users.component';
import { ProductComponent } from 'app/pages/product/product.component';
import { OrdersComponent } from 'app/pages/orders/orders.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    TableComponent,
    UpgradeComponent,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    ProfileComponent,
    CategoryComponent,
    ProductComponent,
    UsersComponent,
    OrdersComponent
  ],
  providers:[
    NgbActiveModal
  ]
})

export class AdminLayoutModule {}
