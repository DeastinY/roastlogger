import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { RoastService } from '../roast.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public roastService: RoastService, public alertController: AlertController) { }

  async showConfirmAlert(i) {
    const alert = await this.alertController.create({
        header: 'Confirm delete',
        message: 'Permanently delet this roast ?',
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
                   this.roastService.removeRoast(i);
                }
            }
        ]
    });
    await alert.present();
  }
}
