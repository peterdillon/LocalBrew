import { Injectable } from '@angular/core';

@Injectable()

export class Utils {

    constructor() { }

    public checkKeyPress(e: any, val: string) {
        if (e.keyCode === 13) {
            return true;
        }
        return false;
    }
}