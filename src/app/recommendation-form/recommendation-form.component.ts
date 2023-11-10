import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-recommendation-form',
  templateUrl: './recommendation-form.component.html',
  styleUrls: ['./recommendation-form.component.scss']
})
export class RecommendationFormComponent {
  test:any;
  recommendations: { title: string; id: string; description: string; file: any; }[] | { file: File; }[];

  constructor(private formBuilder: FormBuilder,private fileUploadService: FileUploadService) {}

  addRecommendation() {
    this.recommendations = [{ title: '', id: '', description: '', file: this.test }];
    this.recommendations.push({ title: '', id: '', description: '', file: this.test });
  }

  removeRecommendation(index: number) {
    this.recommendations.splice(index, 1);
  }

  onFileChange(event: any, index: number) {
    const fileList: FileList | null = event.target.files;
    if (fileList && fileList.length > 0) {
      this.recommendations[index].file = fileList[0];
    }
  }

  saveRecommendations() {
    // Implement the logic to send recommendations to the server for uploading
    console.log('Sending recommendations to the server:', this.recommendations);
    this.uploadFile(this.recommendations)
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