import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app/home/home.component';
import { UserComponent } from './app/user/user.component';
import { ContactUsComponent } from './app/contactus/contactus.component';

import { ContactUsGuard } from './app/contactus/contactus.guard';
import { ForbiddenComponent } from './app/forbidden/forbidden.component';

const routes:Routes=[
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'user/:id',
        component:UserComponent
    },
    {
        path:'contactus',
        component:ContactUsComponent,
        canActivate:[ContactUsGuard]
    },{
        path:'forbidden',
        component:ForbiddenComponent
    }
];

export const routingModule:ModuleWithProviders = RouterModule.forRoot(routes);