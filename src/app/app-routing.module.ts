import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { AuthSerive } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { canDeactivateGuard } from './servers/edit-server/can-deactivate.service';
import { ErrorFileComponent } from './error-file/error-file.component';

const appRoutes: Routes = [
    

    { path: "", component: HomeComponent },
    {
        path: "users", component: UsersComponent, children: [
            { path: ":id/:name", component: UserComponent }
        ]
    },
    {
        path: "servers", 
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        component: ServersComponent,
        children: [
            { path: ":id", component: ServerComponent },
            { path: ":id/edit", component: EditServerComponent,canDeactivate:[canDeactivateGuard] },
        ]


    },
    {
        path: "**", redirectTo: "/not-found"
    },

    {
        // path: "not-found", component: PageNotFoundComponent
        path: "not-found", component: ErrorFileComponent, data: { message: "FUCK Page not Found !"}

    }


]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}