import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private _name:string;

    constructor(private _http:Http){
        this._name = 'dilispersona';
    }

    getUser(){
        return this._http.get('http://api.github.com/users' + '/' + this._name)
            .map(res => res.json());    
    }
}