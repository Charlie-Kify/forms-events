import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('',[Validators.required, Validators.email,Validators.pattern("[^ @]*@[^ @]*")]),
      password: new FormControl('',Validators.required)
    });
  }

  onLogIn(){
    if(this.loginForm.valid){
      console.log('inicio de sesión correcto');
      this.router.navigate(['/','module-home','home'])
    } else{
      this.loginForm.markAllAsTouched();
      console.log('Ingrese todos los campos');
      
    }
  }

  onSignIn(){
    this.router.navigate(['/','module-auth','sign-in']);
  }

  // Añadiendo la funcion del evento del teclado
  onKeyPress(event: any){
    console.log(event);
    
  }

  onChange(event){
    console.log(event);
    
  }

}
