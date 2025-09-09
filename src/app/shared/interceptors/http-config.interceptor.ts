import { HttpInterceptorFn } from '@angular/common/http';

export const httpConfigInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
