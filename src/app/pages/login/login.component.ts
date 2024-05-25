import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario!: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: SocialAuthService,
    private router: Router) {
  }
  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required,]]
    });
    this.authService.authState.subscribe((user: SocialUser) => {
      if (user) {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  signInWithGoogle(): void {
    
  }
}
