import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {

  public loading: boolean;
  public loginFailed: boolean;

  constructor(private router: Router) {}

  public onLogin(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      // this.loginFailed = true;
      this.router.navigate(['/pages/news-feed']);
    }, 3000);
  }
  
}
