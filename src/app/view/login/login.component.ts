import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/model';
import { AuthService } from 'src/app/service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  public loginForm: FormGroup;
  public loading: boolean;
  public loginFailed: boolean;

  constructor(private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {}
  
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email] ],
      password: ['', Validators.required]
    })
  }

  public onLogin(): void {
    this.loading = true;
    const loginUser: LoginUser  = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    this.authService.login(loginUser).subscribe({
      next: res => {
        this.loading = false;
        localStorage.setItem('jwt', 'Bearer ' + res.token);
        this.router.navigate(['/pages/news-feed']);
      },
      error: err => {
        this.loading = false;
        this.loginFailed = true;
      }
    })
  }
}
