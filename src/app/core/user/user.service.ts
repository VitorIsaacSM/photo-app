import { Injectable } from '@angular/core';
import { TokenService } from '../token/token.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import * as jtw_decode from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root'})
export class UserService { 

    private userSubject = new BehaviorSubject<User>(null);
    private userName: string;

    constructor(private tokenService: TokenService, private http: HttpClient) { 

        this.tokenService.hasToken() && 
            this.decodeAndNotify();
    }

    setToken(token: string) {
        this.tokenService.setToken(token);
        this.decodeAndNotify();
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    private decodeAndNotify() {
        const token = this.tokenService.getToken();
        const user = jtw_decode(token) as User;
        this.userName = user.name;
        this.userSubject.next(user);
    }

    logout() {
        this.tokenService.removeToken();
        this.userSubject.next(null);
        this.userName = null;
    }

    isLogged() {
        return this.tokenService.hasToken();
    }

    getUserName() {
        return this.userName;
    }

    getAllUsers() {
        return this.http.get(environment.ApiUrl + '/user/get-all');
    }
}
