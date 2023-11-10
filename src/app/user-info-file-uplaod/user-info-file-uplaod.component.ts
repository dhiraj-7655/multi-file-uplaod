import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-user-info-file-uplaod',
  templateUrl: './user-info-file-uplaod.component.html',
  styleUrls: ['./user-info-file-uplaod.component.scss']
})
export class UserInfoFileUplaodComponent implements OnInit {

  userForm: FormGroup;
  // users: FormArray = new FormArray([]);
  users: any=[];

  constructor(private formBuilder: FormBuilder,private fileUploadService: FileUploadService) {
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
      this.users.forEach((user: any) => {
        formData.append('user_name', user.value.user_name);
        formData.append('user_id', user.value.user_id);
        formData.append('user_document', user.value.user_document);
      })
      console.log(formData);
    this.uploadFile(formData);

    }
  }
  uploadFile(formData:any) {
    this.fileUploadService.uploadFile(formData).subscribe(
      (response) => {
        // Handle the response from the server
        console.log('File uploaded successfully', response);
      },
      (error) => {
        // Handle any errors
        console.error('File upload error', error);
      }
    );
}

}
