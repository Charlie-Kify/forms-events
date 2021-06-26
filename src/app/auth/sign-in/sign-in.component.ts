import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  group: FormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.group = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('',[Validators.required, Validators.email,Validators.pattern("[^ @]*@[^ @]*")]),
      password: new FormControl('',Validators.required),
      confirmPassword: new FormControl('', Validators.required)
    })
  };

  onSignIn(){
    console.log('FormGroup: ' , this.group);
    
    const values = this.group.value;
    const formIsValid = this.group.valid;
    const controlName = this.group.get('name');
    const controlNameIsValid = this.group.get('name').valid;

    if(values.password === values.confirmPassword){
      console.log('Formulario válido');

      this.authService.signIn(
        values.name,
        values.email,
        values.password,
      );
      this.router.navigate(['/','module-home', 'dashboard']);
    } else{
      console.log('Las contrasñas no son iguales');
      
    }
  }

}
