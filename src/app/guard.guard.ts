import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from './service/usuario.service';



@Injectable({
  providedIn: 'root'
})
export class CanActiveGuard implements CanActivate {

  constructor(
    private router: Router,
    private service: UsuarioService ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.service.usuario != null){
      return true;
    } else {
      this.router.navigate(['/login']);
      this.service.mensagem('Sessão Expirada! Favor realizar novo Login.');
      return false;
    }
  }
 }
