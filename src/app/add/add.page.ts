import { Component, ElementRef, ViewChild } from '@angular/core';
import { RoastService, Roast } from '../roast.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage {
  public roast: Roast;
  public id: any;
  @ViewChild('pwaphoto') pwaphoto: ElementRef;

  constructor(public roastService: RoastService, private activatedRoute: ActivatedRoute) { 
    this.id = this.activatedRoute.snapshot.paramMap.get('roastid');
    this.roast = this.roastService.roasts[this.id] || new Roast();
  }

  openPWAPhotoPicker() {
    if (this.pwaphoto == null) {
      return;
    }
    this.pwaphoto.nativeElement.click();
  }

  uploadPWA() {
    if (this.pwaphoto == null) {
      return;
    }

    const fileList: FileList = this.pwaphoto.nativeElement.files;

    if (fileList && fileList.length > 0) {
      this.firstFileToBase64(fileList[0]).then((result: string) => {
        this.roast.photos.push(result);
      }, (err: any) => {});
    }
  }

  private firstFileToBase64(fileImage: File): Promise<{}> {
    return new Promise((resolve, reject) => {
      let fileReader: FileReader = new FileReader();
      if (fileReader && fileImage != null) {
        fileReader.readAsDataURL(fileImage);
        fileReader.onload = () => {
          resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
          reject(error);
        };
      } else {
        reject(new Error('No file found'));
      }
    });
}

  createRoast() {
    if (this.id == null) {
      this.roastService.addRoast(this.roast);
    } else {
      this.roastService.roasts[this.id] = this.roast;
    }
  }
}
