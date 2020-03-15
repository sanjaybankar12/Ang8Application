import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { UserComponent } from './app/user/user.component';

const routes:Routes=[
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'user',
        component:UserComponent
    }
];

export const routingModule:ModuleWithProviders = RouterModule.forRoot(routes);