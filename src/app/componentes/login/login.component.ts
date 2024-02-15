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

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private api: ApiServicesService) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]  
    })
  }

  submitLogin() {        
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;    
    this.api.loginUser(dadosLogin).subscribe({
      next: res =>{
        if(res.email){
          this.router.navigate(['/usuarios'])          
        }        
      }      
    });
  }
  
}
