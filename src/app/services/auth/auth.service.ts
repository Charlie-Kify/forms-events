import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  isLogged = false;
    // store the URL so we can redirect after logging in
    redirectUrl: string | null = null;
    

    logout(): void {
      this.isLogged = false;
    }

   

  constructor() { }
}
