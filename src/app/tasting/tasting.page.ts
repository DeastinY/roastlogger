import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { RoastService, Roast } from '../roast.service';

@Component({
  selector: 'app-tasting',
  templateUrl: './tasting.page.html',
  styleUrls: ['./tasting.page.scss'],
})
export class TastingPage {
  public roast: Roast;
  public id: any;

  constructor(private activatedRoute: ActivatedRoute, public roastService: RoastService) {
    this.roast = new Roast();
   }

   ionViewWillEnter() {
    this.activatedRoute.paramMap.subscribe((queryParams: ParamMap) => {
      this.id = queryParams.get('roastid');
      this.roast = this.roastService.roasts[this.id];
   });
  }

}
