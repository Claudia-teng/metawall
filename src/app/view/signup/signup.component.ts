import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent {
  public loading: boolean;
  public signupFailed: boolean;

  constructor(private router: Router) {}

  public onSignup(): void {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      // this.signupFailed = true;
      this.router.navigate(['/pages/news-feed']);
    }, 3000);
  }
}
