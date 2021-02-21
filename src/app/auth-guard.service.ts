import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthSerive } from "./auth.service";



@Injectable()
export class AuthGuard implements CanActivate {


    constructor(
        private authSerive: AuthSerive,
        private route:Router
    ) { }


    canActivate(
        route: ActivatedRouteSnapshot,
        state:RouterStateSnapshot
    ):Observable<boolean> | Promise<boolean>  |boolean{
        return this.authSerive.isAuthenticated()
            .then(
                (authenticated: boolean) => {
                    if (authenticated) {
                        return true
                    } else {
                        this.route.navigate(['/'])
                    }
            }
        )
    }
}