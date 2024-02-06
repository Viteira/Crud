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
  id: string = '';

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
      this.provider.Api(dados, 'apiUsuarios.php')
      .subscribe(data =>{
        if(data=['success']){

        }else{

        }
      })
    })
  }

  getDados(dado: any, atributo: string){
    console.log("Dados", dado)
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
  editarDados(nome: string, usuario: string, senha: string, id: string){
    this.nome = nome;
    this.usuario = usuario;
    this.senha = senha;
    this.id = id;
  }

  editar(){
    return new Promise(resolve =>{
      const dados = {
        requisicao: 'editar',
        nome: this.nome,
        usuario: this.usuario,
        senha: this.senha,
        id: this.id
      };
      this.provider.Api(dados, 'apiUsuarios.php')
      .subscribe(data => {
        if(data=['success']){
          alert('Usuário editado com sucesso!');
          //location= 'usuarios';
        }else{
          alert('Erro ao editar!!')
        }
      });
    });
  }
}
