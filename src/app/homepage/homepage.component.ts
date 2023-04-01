import { Component } from '@angular/core';
import { HomepageService } from '../services/homepage/homepage.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  users: any[] = []; 

  constructor(private home: HomepageService ) {
    this.home.getAllUsersList().subscribe((res) => {
      console.log(":: res", res);
      this.users = res.data;
    });

  }
}
