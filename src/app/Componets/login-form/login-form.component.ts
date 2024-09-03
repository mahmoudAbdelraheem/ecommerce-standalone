import { Component } from '@angular/core';
import { LoginService } from '../../Services/login.service';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent {
  loginForm: FormGroup;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: this.fb.array([]),
    });
    this.addnewPhone();
  }

  get phoneNumber(): FormArray {
    return this.loginForm.get('phoneNumber') as FormArray;
  }
  addnewPhoneNumber(): FormGroup {
    // controls
    return this.fb.group({
      phone: [
        '',
        [
          Validators.required,
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
    });
  }

  addnewPhone() {
    this.phoneNumber.push(this.addnewPhoneNumber());
  }

  removePhoneNumber(item: number) {
    this.phoneNumber.removeAt(item);
  }
  get fullName() {
    return this.loginForm.get('fullName');
  }
  get email() {
    return this.loginForm.get('email');
  }
 login(): void {
    if (this.loginForm.valid) {
      this.loginService.userData.name = this.fullName?.value;
      this.loginService.userData.email = this.email?.value;
      this.loginService.userData.phoneNumber = this.phoneNumber.value;
      this.router.navigate(['/home']);
      //? login func
      this.loginService.login();
     
    } else {
      console.log('Form not valid called from login func');
    }
  }
}
