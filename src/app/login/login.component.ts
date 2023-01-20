import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {MESSAGES, PATTERN} from "../shared/services/messages";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  messages = MESSAGES;
  pattern = PATTERN;
  loginForm: FormGroup;
  submitted: boolean = false;
  serverError: string = '';

  constructor(public router: Router, private fb: FormBuilder,) {
    this.loginForm = fb.group({
      email: [null,
        Validators.compose([
          Validators.required,
          Validators.minLength(5),
          Validators.pattern(this.pattern.email),
        ]),
      ],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.loginForm.getRawValue());
    // if(this.loginForm.get('email')?.value === 'admin@gmail.com' && this.loginForm.get('password')?.value === '@dmin1234') {
      this.router.navigate(['/products']);
    // }
  }
}
