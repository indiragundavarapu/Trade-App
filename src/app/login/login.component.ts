import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  passwordVisible: boolean = false;

  isLoginFormVisible: boolean = true;


  verifyForm!: FormGroup;
  otpSent = false;
  // userId!: string;
  password!: string;
  errorMessage!: string;
  // loginForm: any;
  constructor(private fb: FormBuilder, private router: Router) {
  }
  loginForm!: FormGroup;
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onLogin(): void {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;
  
    if (email === 'admin' && password === 'admin@123') {
      const timestamp = Date.now();
    const mockToken = btoa(`${email}:${password}:${timestamp}`); // creates base64 token
    localStorage.setItem('authToken', mockToken);

    console.log('Login successful');
    console.log('Stored token:', mockToken);

      console.log('Admin login successful!');
      this.router.navigate(['/dashboard']); 
    } else {
      this.errorMessage = 'Invalid username or password';
      alert(this.errorMessage); 
    }
  }
  
  }
  
