import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ApiServicesService } from "src/app/service/api-services.service";

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit{
  lista: any = [];
  limit: number = 10;
  start: number = 0;
  nome: string = '';
  usuario: string = '';
  senha: string = '';

  constructor(
    private router: Router,
    private provider: ApiServicesService
  ) {}

  ngOnInit(): void {
    this.lista = [];
    this.start = 0;
    this.carregar();
  }

  carregar(){
    return new Promise (resolve => {
      let dados = {
        requisicao : 'listar',
        limit : this.limit,
        start : this.start
      };
      this.provider.Api(dados, 'apiUsuarios.php').subscribe(data => {
        for(let dado of data = ['result']){
          this.lista.push(dado);
        }
        resolve(true);
      });
    });
  }

  cadastrar(){
    return new Promise(resolve => {
      let dados = {
        requisicao: 'add',
        nome: this.nome,
        usuario: this.usuario,
        senha: this.senha
      };
      console.log("pegar dados",dados);
      this.provider.Api(dados, 'apiUsuarios.php')
      .subscribe(data =>{
        if(data=['success']){

        }else{

        }
      })
    })
  }

  getDados(dado: any, atributo: string){

    switch (atributo){
      case "nome":
        this.nome = dado.target.value;
        break
      case "usuario":
        this.usuario = dado.target.value;
        break
      case "senha":
        this.senha = dado.target.value;
        break
    }
  }
}
