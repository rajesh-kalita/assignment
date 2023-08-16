import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { base_URL, get_all_users } from '../constants/urls.constants';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }

  get_all_users() {
    return this.http.get(base_URL + get_all_users);
  }
}
