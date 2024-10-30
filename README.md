# AppAngularkeycloak

Esta é uma aplicação de exemplo que utiliza o Angular 18.2.7 junto com o Keycloak para implementar um sistema de login seguro com OAuth2 e OpenID Connect.
Requisitos

    Node.js - 20.15.1 e npm (para instalar pacotes e executar a aplicação Angular)
    Angular CLI - 18.2.7
    Keycloak (configurado para suportar a aplicação)

Configuração do Keycloak

    Instale e execute o Keycloak: Siga as instruções da documentação do Keycloak para instalar e rodar o Keycloak.

    Crie um novo cliente:
        No console de administração do Keycloak, crie um realm com o nome de oauth2.
        Nomeie o cliente como oauth2 e configure o campo "Client Protocol" como openid-connect.
        Em "Access Type", selecione public.
        Defina o campo "Valid Redirect URIs" com a URL onde a aplicação Angular estará hospedada, por exemplo: http://localhost:4200/*.

    
