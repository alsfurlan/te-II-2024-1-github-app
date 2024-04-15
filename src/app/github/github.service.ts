import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Profile } from "./github.model";



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
} 