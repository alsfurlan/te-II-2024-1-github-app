import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GithubService } from "../../github.service";
import { Subscription } from "rxjs";
import { Repository } from "../../github.model";

@Component({
    templateUrl: './github-repositories.component.html'
})
export class GithubRepositoriesComponent implements OnInit, OnDestroy {

    private subscription = new Subscription();

    repositories: Repository[] = [];

    constructor(
        private activatedRoute: ActivatedRoute,
        private githubService: GithubService
    ) { }

    ngOnInit(): void {
        const user = this.activatedRoute.snapshot.params['user'];

        this.subscription.add(
            this.githubService.getRepositories(user).subscribe(
                response => {
                    console.log(response)
                    this.repositories = response;
                },
                () => alert('Erro ao buscar repositórios')
            )
        )
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

}