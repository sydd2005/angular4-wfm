import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { User } from '../models/user.model';
import { BaseApi } from '../core/base-api';

@Injectable()
export class UsersService extends BaseApi {
  constructor(public http: Http) {
    super(http);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.get(`users?email=${email}`)
      .map((users: User[]) => users[0]);
  }

  createNewUser(user: User): Observable<User> {
    return this.http.post(`http://localhost:3000/users`, user)
    .map((response: Response) => response.json());
  }
}
