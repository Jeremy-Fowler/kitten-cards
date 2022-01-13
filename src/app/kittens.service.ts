import { Injectable } from '@angular/core';
import { Kitten, kittens } from './kittens';

@Injectable({
  providedIn: 'root'
})
export class KittensService {

  constructor() { }
  getKittens(): Kitten[] {
    return kittens;
  }
}
