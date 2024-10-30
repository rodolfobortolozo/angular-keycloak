import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { SessaoService } from './shared/seguranca/sessao.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule],
templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-angularkeycloak';

  constructor(private readonly sessaoService : SessaoService){
  }

  logout(){
    this.sessaoService.logout();
  }

  get token(){
    return this.sessaoService.getToken();
  }

  get userData(){
    return SessaoService.usuario;
  }

  isAdmin(){
    return this.sessaoService.isAdmin();
  }

}
