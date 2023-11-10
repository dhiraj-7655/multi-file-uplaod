import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-user-info-file-uplaod',
  templateUrl: './user-info-file-uplaod.component.html',
  styleUrls: ['./user-info-file-uplaod.component.scss']
})
export class UserInfoFileUplaodComponent implements OnInit {

  userForm: FormGroup;
  users: FormArray = new FormArray([]);

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      users: this.users
    });
    console.log("constructor called");
  }

  ngOnInit(): void {
    this.addUserField();
    console.log("ngOnInit called");
  }

  onFileChange(index: number, event: any) {
    const files: FileList = event.target.files;
    const userDocumentControl = this.users.at(index).get('user_document') as FormControl;
    userDocumentControl.setValue(files[0]);
  }

  addUserField() {
    this.users.push(
      this.formBuilder.group({
        user_name: '',
        user_id: '',
        user_document: null
      })
    );
  }

  onSubmit() {
    if (this.userForm.valid) {
      const formData = new FormData();
      this.users.value.forEach((user: any) => {
        formData.append('user_name', user.user_name);
        formData.append('user_id', user.user_id);
        formData.append('user_document', user.user_document);
      })
      console.log(formData);
    }
  }

}
