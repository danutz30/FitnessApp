import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

//third-party modules 
import { AngularFireModule, FirebaseAppConfig } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth'; 
import { AngularFireDatabaseModule } from 'angularfire2/database'; 

//shared module
import { SharedModule } from './shared/shared.module';

export const ROUTES: Routes = [
    {
        path: 'auth',
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path: 'login', loadChildren: './login/login.module#LoginModule' },
            { path: 'register', loadChildren: './register/register.module#RegisterModule' },
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        AngularFireModule,
        AngularFireAuthModule,
        AngularFireDatabaseModule,
        SharedModule
    ],
    declarations: [],
    providers: []
})
export class AuthModule {}