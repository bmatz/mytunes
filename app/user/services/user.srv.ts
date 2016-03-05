import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

import {User} from '../models/user';


@Injectable()
export class UserService {
    constructor() {
        this._myFirebaseRef = new Firebase("scorching-inferno-7529.firebaseIO.com");
    }

    getUser() {
        return new Observable(observable => {
            this._myFirebaseRef.onAuth(authData => {
               let user;
                if (authData) {
                    user = new User(authData);
                }
                observable.next(user);
            });
        });
    }

    login(email, password) {
        return new Observable(observable => {
            this._myFirebaseRef.authWithPassword({
               email : email,
                password : password
            }, (error, authData) => {
                if (error) {
                    observable.error(error);
                } else {
                    observable.next(new User(authData));
                }
            })
        });
    }

    register(email, password) {
        return new Observable(observable => {
            this._myFirebaseRef.createUser({
                email : email,
                password : password
            }, (error, userData) => {
                if (error) {
                    observable.error(error);
                }  else {
                    this.login(email, password)
                        .subscribe(user => {
                            observable.next(user);
                        });
                }
            });
        });
    }

    logout() {
        return new Observable(observable => {
            this._myFirebaseRef.unauth()
            observable.next();
        });
    }

}
