import { CanActivateFn } from '@angular/router';
import { SessaoService } from '../seguranca/sessao.service';

export const canAuthGuard: CanActivateFn = (route, state) => {

  const requiredRoles: Array<string> = route.data['roles'];
  const rolesUser: Array<string> = SessaoService.usuario.rolesResourceAcess!;

  return rolesUser.some(role => requiredRoles.includes(role));
};
