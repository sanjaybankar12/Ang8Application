import { Injectable } from '@angular/core';
import { CanActivate , UrlTree, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class ContactUsGuard implements CanActivate {

    isValid:boolean=false;
    constructor(private router:Router) {

    }

    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
        if(this.isValid) {
            this.router.navigate(["/forbidden"]);
        }
        return !this.isValid;
    }
}