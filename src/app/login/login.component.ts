import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AuthenticationService } from '../services/authentication.service';
import { TokenStorageService } from '../services/token-storage.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  emailFC = new UntypedFormControl('', [Validators.required, Validators.email]);
  newUser: boolean = false;

  form: any = {
    email: null,
    password: null
  };
  email: string = '';
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  constructor(private authService: AuthenticationService, public tokenStorage: TokenStorageService, public router: Router) {


  }

  ngOnInit(): void {

  }
  changeNewUserStatus() {
    this.newUser = !this.newUser
  }
  getErrorMessage() {
    if (this.emailFC.hasError('required')) {
      return 'You must enter a value';
    }

    return this.emailFC.hasError('email') ? 'Not a valid email' : '';
  }

  login(): void {


    this.authService.login(this.form.email, this.form.password).subscribe(
      data => {
        console.log(data.tokens.access, 'data')
        this.tokenStorage.saveToken(data.tokens.access);
        this.tokenStorage.saveUser(data);
        this.router.navigate(['movies'])
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        window.location.reload()
      }
    );
  }

  signup(): void {


    this.authService.register(this.form.username, this.form.email, this.form.password).subscribe(
      data => {
        console.log(data.tokens.access, 'data')
        this.tokenStorage.saveToken(data.tokens.access);
        this.tokenStorage.saveUser(data);
        this.router.navigate(['movies'])
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        window.location.reload()
      }
    );
  }


  reloadPage(): void {
    window.location.reload();
  }
}
