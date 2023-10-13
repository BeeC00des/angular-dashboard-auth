import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  getData:any

  constructor(private authService:AuthService){}

  ngOnInit(): void {
    this.getData = this.authService.getUserData();
    console.log(this.getData)
  }

}



