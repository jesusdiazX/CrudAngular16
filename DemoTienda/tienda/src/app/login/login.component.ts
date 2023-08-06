import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceClienteService } from '../Servicios/service-cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import {  AuthServiceServiceService } from '../Servicios/auth-service-service.service';
import { first } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form!: FormGroup;
  formregistro!: FormGroup;
  public loginInvalid!: boolean;
  private formSubmitAttempt!: boolean;
  private returnUrl!: string;
  showlogin!: boolean;
  showregistro!: boolean;
  loading!: boolean;
 
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthServiceServiceService,
  ) {
  }

  async ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'clientes';


    this.showlogin=false;


    this.form = this.fb.group({
      user: ['', Validators.required],
      pwd: ['', Validators.required]
    });



    this.formregistro = this.fb.group({
      Nombre: ['', Validators.email],
      username: ['', Validators.email],
      password: ['', Validators.required]
    });

  }



  
  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    //this.alertService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
        return;
    }

    this.loading = true;
    this.authService.login(this.form.value)
        .pipe(first())
        .subscribe({
            next: () => {
              debugger
                // get return url from query parameters or default to home page
                const returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'clientes';
                console.log(returnUrl);
              this.showlogin=  this.authService.isAuthenticated;
               // this.router.navigateByUrl(returnUrl);
               this.router.navigate([this.returnUrl]);
            },
            error: error => {
               
            }
        });
}

}

