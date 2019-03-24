import { Component } from '@angular/core';
import { RoastService, Roast, Tasting } from '../roast.service';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-add-tasting',
  templateUrl: './add-tasting.page.html',
  styleUrls: ['./add-tasting.page.scss'],
})
export class AddTastingPage {

  public roast: Roast;
  public roastid: any;
  public tastingid: any;
  public tasting: Tasting;

  constructor(public roastService: RoastService, private activatedRoute: ActivatedRoute, private router: Router) 
  { this.tasting = new Tasting(); }

  ionViewWillEnter() {
    this.activatedRoute.paramMap.subscribe((queryParams: ParamMap) => {
      this.roastid = queryParams.get('roastid');
      this.roast = this.roastService.roasts[this.roastid];
   });
  }

  createTasting() {
    if (this.tastingid == null) {this.roast.tastings.push(this.tasting);}
    this.roastService.updateRoast(this.roastid, this.roast);
    this.router.navigateByUrl('/tasting/'+this.roastid);
  }

}
