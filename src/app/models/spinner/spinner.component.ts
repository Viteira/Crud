import { ApiServicesService } from 'src/app/service/api-services.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/login.interface';

@Component({  
  selector: 'app-spinner',
  templateUrl: 'spinner.component.html',
  styleUrls: ['spinner.component.css'],
})
export class SpinnerComponent implements OnInit {

  activeSpinner: boolean = false;

  ngOnInit(): void {
    this.active();
  }

  active(){ 
    this.activeSpinner = true;   
    setTimeout(() => {
      this.activeSpinner = false;
    }, 1500);
  }
}
