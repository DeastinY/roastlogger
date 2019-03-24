import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RoastService, Roast } from '../roast.service';
import { distanceInWords, parse, isValid } from 'date-fns'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tasting',
  templateUrl: './tasting.page.html',
  styleUrls: ['./tasting.page.scss'],
})
export class TastingPage {
  public roast: Roast;
  public id: any;

  constructor(private activatedRoute: ActivatedRoute, public roastService: RoastService, public alertController: AlertController) {
    this.roast = new Roast();
   }

   ionViewWillEnter() {
    this.activatedRoute.paramMap.subscribe((queryParams: ParamMap) => {
      this.id = queryParams.get('roastid');
      this.roast = this.roastService.roasts[this.id];
   });
  }

  getDateDiff(id) {
    let rd = parse(this.roast.date);
    let td = parse(this.roast.tastings[id].date);
    if (isValid(rd) && isValid(td)) {
      return distanceInWords(rd, td) + " since roast";
    } else {
      "missing data"
    }
  }

  async showConfirmAlert(i) {
    const alert = await this.alertController.create({
        header: 'Confirm delete',
        message: 'Permanently delete this tasting?',
        buttons: [
            {
                text: 'No',
                handler: () => {
                    console.log('Cancel clicked');
                }
            },
            {
                text: 'Yes',
                handler: () => {
                  this.roast.tastings.splice(i, 1);
                  this.roastService.updateRoast(this.roast, this.id);
                }
            }
        ]
    });
    await alert.present();
  }
}
