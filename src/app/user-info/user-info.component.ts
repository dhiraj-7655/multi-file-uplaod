import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor() { }
  users:any= [];

  ngOnInit(): void {
    this.users = [{ user_name: '', user_id: '', user_document: null }];
  }

  onFileSelected(event: Event, index: any) {
    const inputElement = event.target as HTMLInputElement;
    const file = inputElement.files?.[0];
    this.users[index].user_document = file;
  }

  addNewForm() {
    this.users.push({ user_name: '', user_id: '', user_document: 'null' });
  }

  onSubmit() {
    // Implement your submission logic here, e.g., send data to a server
    console.log(this.users);
  }
}
