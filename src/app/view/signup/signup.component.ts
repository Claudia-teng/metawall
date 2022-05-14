import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignupUser } from 'src/app/model';
import { AuthService } from 'src/app/service';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent {
  public signupForm: FormGroup;
  public loading: boolean;
  public confirmError: boolean;
  public signupFailed: boolean;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    }, {validators: this.checkPasswords})
  }            

  public onSignup(): void {
    this.loading = true;
    const signupUser: SignupUser  = {
      name: this.signupForm.value.name,
      email: this.signupForm.value.email,
      password: this.signupForm.value.password,
      confirmPassword: this.signupForm.value.confirmPassword
    }
    this.authService.signup(signupUser).subscribe({
      next: res => {
        this.loading = false;
        localStorage.setItem('jwt', 'Bearer ' + res.token);
        this.router.navigate(['/pages/news-feed']);
      },
      error: err => {
        this.loading = false;
        this.signupFailed = true;
      }
    })
  }

  private checkPasswords: ValidatorFn = (group: AbstractControl):  ValidationErrors | null => { 
    let pass = group.get('password')?.value;
    let confirmPass = group.get('confirmPassword')?.value
  
    return pass === confirmPass ? null : { notSame: true }
  }
}
