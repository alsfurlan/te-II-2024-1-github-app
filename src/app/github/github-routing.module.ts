import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GithubProfileComponent } from "./components/github-profile/github-profile.component";
import { GithubRepositoriesComponent } from "./components/github-repositories/github-repositories.component";
import { GithubFollowersComponent } from "./components/github-followers/github-followers.component";

const routes: Routes = [
    {
        path: 'profile',
        component: GithubProfileComponent,
    },
    {
        path: 'repositories/:user',
        component: GithubRepositoriesComponent
    },
    {
        path: 'followers/:user',
        component: GithubFollowersComponent
    },
    {
        path: '**',
        pathMatch: "full",
        redirectTo: 'profile'
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GithubRoutingModule { }