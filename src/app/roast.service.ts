import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class RoastService {

  public roasts: Roast[] = [];

  constructor(private storage: Storage) { 
    this.storage.ready().then(() => { 
      this.storage.get('roasts').then((roasts) => { 
        this.roasts = roasts || [];
      }); 
    });
  }

  addRoast(roast) {
    this.roasts.push(roast);
    this.storage.set('roasts', this.roasts);
  }

  removeRoast(i) {
    this.roasts.splice(i,1);
    this.storage.set('roasts', this.roasts);
  }

  updateRoast(roast, i) {
    this.roasts[i] = roast;
    this.storage.set('roasts', this.roasts);
  }
}

export class Roast {
  public photos: string[] = [];
  public tastings: Tasting[] = [];
  public date: any;
  public name: any;
  public origin: any;
  public processing: any;
  public weight_in: any;
  public weight_out: any
  public notes: any;
}

export class Tasting {
  date: any;
  rating: any;
  notes: any;
}