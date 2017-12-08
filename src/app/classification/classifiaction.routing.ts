import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ClassificationComponent} from './classification.component';

const routes: Routes = [
  { path: '', component: ClassificationComponent }
];

export const classificationRouting: ModuleWithProviders = RouterModule.forChild(routes);
