import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import {delay, mergeMap, materialize, dematerialize} from 'rxjs/operators';

let users = JSON.parse(localStorage.getItem('users')) || [];
@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = req;

    // @ts-ignore
    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/user/authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('/users') && method === 'GET':
          return getUsers();
          case url.endsWith('/users/register') && method === 'POST':
            return registerUser();
          case url.match(/\/users\/\d+$/) && method === 'DELETE':
            return deleteUser();
        default:
          return next.handle(req);
      }

    }

    function authenticate() {
      const { username, password } = body;
      const user = users.find(u => u.username === username && u.password === password);
      if (!user) { return error('Username or password is incorrect.'); }
      return ok({
        id: user.id,
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        token: 'fake-jwt-token'
      });
    }

    function registerUser() {
      const user = body;
      if (users.find(u => u.username === user.username)) {
        return error('Username "' + user.username + '" is already taken.')
      }

      user.id = user.length ? Math.max(...user.map(u => u.id)) + 1 : 1;
      users.push(user);
      localStorage.setItem('user', JSON.stringify(users));
      return ok();
    }

    function getUsers() {
      if (!isLoggedIn()) { return unauthorized(); }
      return ok();
    }

    function deleteUser() {
      if (!isLoggedIn()) { return unauthorized(); }
      users = users.filter(u => u.id !== idFromUrl());
      localStorage.setItem('users', JSON.stringify(users));
      return ok();
    }

    function ok(body?) {
      return of(new HttpResponse({ status: 200, body }));
    }

    function error(message) {
      return throwError({ error: { message } });
    }

    function unauthorized() {
      return throwError({ status: 401, error: { message: 'Unauthorized' } });
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }
    function idFromUrl() {
      const urlParts = url.split('/');
      // @ts-ignore
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}
export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true
};
