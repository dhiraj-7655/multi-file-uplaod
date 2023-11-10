import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-reactive',
  templateUrl: './file-reactive.component.html',
  styleUrls: ['./file-reactive.component.scss']
})
export class FileReactiveComponent implements OnInit {


  ngOnInit(): void {
  }

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private fileUploadService: FileUploadService) {
    this.userForm = this.fb.group({
      users: this.fb.array([this.createUserGroup()])
    });
  }

  createUserGroup(): FormGroup {
    return this.fb.group({
      user_name: ['', Validators.required],
      user_id: ['', Validators.required],
      user_document: [null]
    });
  }

  addUser() {
    const users = this.userForm.get('users') as FormArray;
    users.push(this.createUserGroup());
  }

  removeUser(index: number) {
    const users = this.userForm.get('users') as FormArray;
    users.removeAt(index);
  }

  onFileSelected(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const users = this.userForm.get('users') as FormArray;
      const userGroup = users.at(index) as FormGroup;
      userGroup.get('user_document')?.setValue(input.files[0]);
    }
  }

  onSubmit() {
    // Handle form submission, you can access userForm.value to get the data.
    console.log(this.userForm.value);
    this.uploadFile(this.userForm.value);
  }

  readFile(event: Event, index: number){
    const fileI = this.userForm.controls.users.value[index].user_document
    var reader = new FileReader();
    reader.onload = () => {
        console.log(reader.result);
    };
    reader.readAsText(fileI);
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
