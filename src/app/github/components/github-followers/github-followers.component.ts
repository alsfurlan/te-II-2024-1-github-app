import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { GithubService } from "../../github.service";
import { Subscription } from "rxjs";
import { Follower } from "../../github.model";

@Component({
    templateUrl: './github-followers.component.html'
})
export class GithubFollowersComponent implements OnInit, OnDestroy {

    followers: Follower[] = [];
    private subscription = new Subscription();

    constructor(
        private activatedRoute: ActivatedRoute,
        private githubService: GithubService,
    ) { }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnInit(): void {
        const user = this.activatedRoute.snapshot.params['user'];

        console.log('user: ', user);
        

        this.subscription.add(
            this.githubService.getFollowers(user).subscribe(
                response => {
                    console.log(response);
                    this.followers = response;
                },
                error => console.error(error)
            )
        )
    }
}