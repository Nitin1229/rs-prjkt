import { Routes } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';

export const QUOTE_ROUTES: Routes = [
  { path: '', redirectTo: 'productForm/new', pathMatch: 'full' },
  { path: 'productForm/:id', component: ProductFormComponent },
];
