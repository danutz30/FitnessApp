import { FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
    selector: 'login',
    template: `
        <div>
            <auth-form (submitted)="loginUser($event)">
                <h1>Login</h1>
                <a routerLink="/auth/register">Not registered?</a>
                <button type="submit">
                    Login 
                </button>
            </auth-form>
        </div>
    `
})
export class LoginComponent {
    constructor() {}

    loginUser(event: FormGroup) {
        console.log(event.value);
    }
}