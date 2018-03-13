import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [
    { path: '', component: AppComponent },
    { path: 'login', component: LoginComponent },
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);


