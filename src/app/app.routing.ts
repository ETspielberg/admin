import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminUserrolesComponent} from './admin.userroles.component';
import {AppStartComponent} from './app.start.component';

const routes: Routes = [
    { path: '', component: AppStartComponent },
    { path: 'userAdmin', component: AdminUserrolesComponent},
    { path: 'classification', loadChildren: 'app/classification/classification.module#ClassificationModule'}
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);
