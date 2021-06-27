import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { LoginComponent } from 'app/pages/login/login.component';
import { ProfileComponent } from 'app/pages/profile/profile.component';
import { CategoryComponent } from 'app/pages/category/category.component';
import { UsersComponent } from 'app/pages/users/users.component';
import { ProductComponent } from 'app/pages/product/product.component';
import { OrdersComponent } from 'app/pages/orders/orders.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user',           component: UserComponent },
    { path: 'table',          component: TableComponent },
    { path: 'typography',     component: TypographyComponent },
    { path: 'category',          component: CategoryComponent },
    { path: 'products',  component: ProductComponent },
    { path: 'upgrade',        component: UpgradeComponent },
    // { path: 'profile',        component: ProfileComponent },
    { path: 'users',        component: UsersComponent },
    { path: 'orders',        component: OrdersComponent },



];
