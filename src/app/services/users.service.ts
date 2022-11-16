import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from 'src/app/models/User'
import { Observable } from 'rxjs';

const USER_API = "http://localhost:3000/Users"

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private http: HttpClient) { }

// GET All
getUsers(): Observable<User[]> {
  return this.http.get<User[]>(USER_API);
}

// GET by Id
getUser(id: string | null): Observable<User> {
  return this.http.get<User>(`${USER_API}/${id}`)
}

// GET by Username
getUserByUsername(username: string): Observable<User> {
  return this.http.get<User>(`${USER_API}/${username}`)
}

// POST User
addUser(newUser: User): Observable<User> {
  return this.http.post<User>(USER_API, newUser)
}
}
