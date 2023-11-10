import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})

export class FileUploadComponent {

  @Input()
  form!: FormGroup;

  constructor(private fb: FormBuilder, private fileUploadService: FileUploadService) { }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.form?.get('file')?.setValue(file);
  }
  uploadFile() {
      const formData = new FormData();
      formData.append('userName', this.form?.get('userName')?.value);
      formData.append('userId', this.form.get('userId')?.value);
      formData.append('file', this.form.get('file')?.value);
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

  save(){
this.uploadFile();
  }

}
