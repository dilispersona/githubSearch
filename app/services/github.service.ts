import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = '4c986e45dc879f4419e5';
    private client_secret='f6dd4c4de7ccdc474b52af8a77f5be7c8959d0d6';
    
    constructor(private _http:Http){
        console.log('Github Service Ready...');
        this.username = 'dilispersona';
    }
    
    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json())
    }
    
     getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json())
    }
    
    updateUser(username:string){
        this.username = username;
    }
}