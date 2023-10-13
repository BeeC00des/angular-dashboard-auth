import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule,FormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule,ReactiveFormsModule],
  standalone: true,
})
export class LoginComponent {

  form: FormGroup = this.fb.group({
    name:['', Validators.required],
    email:['', Validators.required]
  })


constructor(private authService:AuthService, private fb:FormBuilder, private router: Router){}

login(){
  console.log('hello data')
  let currentUser = this.authService.login(this.form.value.name, this.form.value.email);

  if(!currentUser){
    alert('invalid user');
  }else{
    this.router.navigateByUrl('/main');
  }


}


}
