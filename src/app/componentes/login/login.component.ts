import { ApiServicesService } from 'src/app/service/api-services.service';
import { Usuario } from './../../models/usuario.interface';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent implements OnInit {

  //email: string = '';
  nome: string = '';
  //senha: string = '';
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]  
    })
  }

  pegarDados(dado: any, atributo: string) {
    switch (atributo) {      
      case 'email':
        //this.email = dado.target.value;
        break;
      case 'senha':
        //this.senha = dado.target.value;
        break;
    }
  }

  submitLogin() {
    debugger
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;
  }
  
}
