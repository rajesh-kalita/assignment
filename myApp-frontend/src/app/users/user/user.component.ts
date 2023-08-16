import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { MatTableModule } from '@angular/material/table';
import { MatGridList } from '@angular/material/grid-list';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData: any;
  displayedColumns: string[] = ['ID', 'First Name', 'Last Name', 'Email', 'Registered On'];

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.userService.get_all_users().subscribe(
      (res: any) => {
        res.forEach((element: any) => {
          element.registrationDateTime = new Date(element.registrationDateTime).toDateString();
        });
        this.userData = res;
      }
    )
  }

}
