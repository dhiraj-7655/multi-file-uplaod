import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private http: HttpClient) { }
  uploadFile(formData: any) {
    return this.http.post('your-upload-url', formData);
  }
}
