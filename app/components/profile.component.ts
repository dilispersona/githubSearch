import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html',
    providers:[GithubService]
})
export class ProfileComponent {
    private _user:any;
     constructor(private _githubService: GithubService){
        this._githubService.getUser().subscribe(user => {
            console.log(user);
        })
     }
}
