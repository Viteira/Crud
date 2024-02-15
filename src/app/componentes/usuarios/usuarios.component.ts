import { Usuario } from './../../models/usuario.interface';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServicesService } from 'src/app/service/api-services.service';
//PROJETO CERTO
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
})
export class UsuariosComponent implements OnInit {
  lista: Usuario[] = [];
  titulo: string;
  nome: string = '';
  email: string = '';
  senha: string = '';
  id: number ;
  searchUser: string= '';

  constructor(
    private provider: ApiServicesService,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.carregar();
  }

  carregar() {
    this.provider.getUsers().subscribe({
      next: (data: Usuario[]) => {
        this.lista = data;
      },
    });
  }

  cadastrar() {
    const newUser: Usuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
           
    };    
    this.provider.postUsers(newUser).subscribe((res) => {
      alert('Usuário cadastrado!!');
      window.location.reload();
    });            
  }

  pegarDados(dado: any, atributo: string) {
    switch (atributo) {
      case 'nome':
        this.nome = dado.target.value;
        break;
      case 'email':
        this.email = dado.target.value;
        break;
      case 'senha':
        this.senha = dado.target.value;
        break;
    }
  }

  putUser(){
    const newUser: Usuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      usuarioId: this.id
    };
    this.provider.putUsers(newUser).subscribe((res =>{
      alert('Usuário Editado!!!')
      window.location.reload();
    }))
  }

  deleteUser1(idUser: number){
    this.provider.deleteUser(idUser).subscribe((res =>{
      alert('Usuário Deletado!!!')
      window.location.reload();
    }));     
  }

  renomearCadastrar() {    
    this.titulo = 'Cadastrar Usuário';    
  }

  editar(dado: Usuario) {
    this.titulo = 'Editar Usuário';
    this.nome = dado.nome
    this.email = dado.email
    this.senha = dado.senha
    this.id = dado.usuarioId || 0
    this.change.detectChanges();    
  }

  fecharModal() {
    this.nome = '';
    this.email = '';
    this.senha = '';
    this.change.detectChanges();
  }

  list(search: string){

  }
}
