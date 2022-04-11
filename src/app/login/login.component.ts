import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  LoginAuth(data: any) {
  
    this.authServ.login(this.email, this.password).subscribe((data) => {
      console.log('Login Successful: ' + data);
  
      if (data) this.router.navigate(['/home']);
      else this.formData.setErrors({ unauthenticated: true });
    });
  }

}
