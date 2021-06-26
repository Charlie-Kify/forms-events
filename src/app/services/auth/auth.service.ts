import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // Añadiendo una simulación de base de datos de usuario:
  private users: {
    id: number,
    name: string,
    email: string,
    password: string
  }[] = [{
    id: 1,
    name: 'Karla',
    email: 'kify@mail.com',
    password: 'uveg'
  }];

  constructor() { }

  // Añadiendo métodos para la base de datos:

  login(email: string, password: string): boolean {
    const userFound = this.users.find((user) => user.email === email && user.password === password);

    if (userFound) {
      localStorage.setItem('isLogged', JSON.stringify(userFound));
      return true;
    } else {
      localStorage.clear();
      return false;
    }

  }

  logout() {
    localStorage.clear();
  }

  signIn(name: string, email: string, password: string) {
    const lastUser = this.users[this.users.length - 1];
    const newUser = { id: lastUser.id + 1, name, email, password };
    this.users = [
      ...this.users,
      newUser,
    ]
    localStorage.setItem('isLogged', JSON.stringify(newUser));
  }
}
