import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData:any[]=[
    {
      id:1,
      name:"bee",
      email:"ade@gmail.com",
      // message:""
    },
    {
      id:2,
      name:"bele",
      email:"adegold@gmail.com",
      // message:""
    },
  ];

  session: any;

  formData:any;

  constructor() { }

  login(name:string, email:string){
     let user = this.userData.find((u) => u.email === email && u.name=== name);

     if(user){
      this.session = user;
       localStorage.setItem('session',JSON.stringify(this.session));
     }

     return user;
   }


   // this is where the logic should be to fetch data from form a
   getUserData(){
     this.formData = this.session;
     console.log(this.formData);

     return  this.formData;
   }
}
