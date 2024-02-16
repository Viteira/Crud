import { ApiServicesService } from 'src/app/service/api-services.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.interface';
import { SpinnerComponent } from 'src/app/models/spinner/spinner.component';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loader: boolean = false;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private api: ApiServicesService,
         
    ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]  
    })
    console.log(this.loader);
  }

  submitLogin() {        
    var dadosLogin = this.loginForm.getRawValue() as LoginModel;    
    this.api.loginUser(dadosLogin).subscribe({
      next: res =>{
        if(res.email){  
          this.loader = true;        
          setTimeout(() => {
            this.router.navigate(['/usuarios'])
            this.loader = false;
          }, 1500);                                            
        }                     
      }           
    });
  } 
}
