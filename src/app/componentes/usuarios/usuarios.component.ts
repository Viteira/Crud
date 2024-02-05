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
  email: string = '';
  senha: string = '';

  constructor(
    private router: Router,
    private provider: ApiServicesService
  ) {}

  ngOnInit(): void {

  }


}
