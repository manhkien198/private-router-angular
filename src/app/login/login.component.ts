import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { FormValue } from '../model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  public loginForm = this.fb.group({
    username: [''],
    password: [''],
  });
  constructor(private authService: AuthService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  public submit(): void {
    this.authService.submit(this.loginForm.value);
  }
}
