import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule, HttpClientModule]
})
export class LoginComponent {

  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const loginData = {
        username: this.loginForm.value.username,
        passwordHash: this.loginForm.value.password  // Enviamos la contraseña tal cual
      };

      this.http.post<any>('http://localhost:2502/api/users/login', loginData)
        .subscribe({
          next: (response) => {
            console.log('Login exitoso', response);
            this.router.navigate(['/iniciado']);
          },
          error: (error) => {
            console.error('Error de login', error);
            this.errorMessage = 'Usuario o contraseña incorrectos';
          }
        });
    }
  }
}
