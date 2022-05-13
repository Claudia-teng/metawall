import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const Authorization = localStorage.getItem('jwt') || '';
    const modifiedRequest = req.clone({
      headers: req.headers
        .set('Authorization', Authorization)
    });

    return next.handle(modifiedRequest);
  }
}
