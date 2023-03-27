import { Component, OnInit } from '@angular/core';
import {Store} from "@ngrx/store";
import {ActivatedRoute, Router} from "@angular/router";
import {State} from "../../store/reducer";
import {login} from "../../store/user";
import {AuthenticationService} from "../../services";
import {first} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  constructor(
    private store: Store<State>,
    private readonly router: Router,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private fb: FormBuilder
  ) {
    if (this.authenticationService.userValue) {
      this.router.navigate(['/']);
    }
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  ngOnInit() {
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    const { valid } = this.loginForm;
    if (!valid) {
      return;
    }
    this.loading = true;
    const payload = {
      username: this.f['username'].value,
      password: this.f['password'].value
    }
    this.store.dispatch(login({ payload }));
  }
}
