import {Component, OnInit} from '@angular/core';
import {User} from "../entity/User";
import {Http} from "@angular/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User = new User();
  url = "http://localhost:8080/users";

  constructor(private http: Http, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.http.post(this.url, this.user).subscribe(res => {
      this.router.navigateByUrl("");
    });
  }

}
