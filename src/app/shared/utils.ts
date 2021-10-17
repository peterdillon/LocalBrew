import { Injectable } from '@angular/core';


@Injectable()

export class Utils {

    constructor() { }

public checkKeyPress(e: any, val: string) {
    if (e.keyCode === 13) {
      //this.searchByQuery(val);
      return true;
    }
    return false;
  }
}