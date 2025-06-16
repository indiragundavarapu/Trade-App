import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
// import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  signupForm!: FormGroup;
  signupSuccess = false;
  constructor(private fb:FormBuilder, public router: Router) {}
  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mobile: ['', [Validators.required, Validators.pattern(/^\+91[6-9]\d{9}$/)]],
      location: ['',[Validators.required, Validators.minLength(5)]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      userType: ['Individual', Validators.required],
      password: ['', [Validators.required,  Validators.minLength(6), Validators.pattern('^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,}$')]
      ],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }
  onSubmit(): void {
   console.log('submitted')
  }

  onCancel(){
    this.router.navigate(['/login']);
  }
}
