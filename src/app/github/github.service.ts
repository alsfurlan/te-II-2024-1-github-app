import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Profile, Repository } from "./github.model";

@Injectable()
export class GithubService {

    constructor(
        private httpClient: HttpClient
    ) { }

    searchProfile(profileName: string): Observable<Profile> {
        return this.httpClient.get<Profile>(`
        http://api.github.com/users/${profileName}
        `)
    }

    getRepositories(profileName: string): Observable<Repository[]> {
        return this.httpClient.get<Repository[]>(`
        http://api.github.com/users/${profileName}/repos
        `)
    }
} 