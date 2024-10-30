import { Injectable, inject } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class SessaoService {

  static readonly usuario : Usuario = new Usuario(); 

  constructor(private readonly keycloakService : KeycloakService ) {
    this.dataUsers();
  }

  logout(){
    this.keycloakService.logout();
  }

  getToken(){
    return this.keycloakService.getKeycloakInstance().token;
  }

  dataUsers(){
    const keycloakInstance = this.keycloakService.getKeycloakInstance();

    SessaoService.usuario.userName = keycloakInstance.tokenParsed?.['preferred_username'];
    SessaoService.usuario.email = keycloakInstance.tokenParsed?.['email'];
    SessaoService.usuario.nome = keycloakInstance.tokenParsed?.['name'];
    SessaoService.usuario.rolesRealmAcess = keycloakInstance.tokenParsed?.['realm_access']?.roles;
    SessaoService.usuario.rolesResourceAcess = keycloakInstance.tokenParsed?.['resource_access']?.['oauth2'].roles;
  }

  isAdmin() : boolean | undefined{
    return SessaoService.usuario.rolesResourceAcess?.includes("admin");
  }

}
