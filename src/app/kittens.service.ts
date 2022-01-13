import { Injectable } from '@angular/core';
import { Kitten } from './Kitten';

@Injectable({
  providedIn: 'root'
})
export class KittensService {

  constructor() { }
  private KITTENS: Kitten[] = [
    { id: 1, name: 'Gopher', adopted: false, images: ['https://imgur.com/MKBruXW', 'https://imgur.com/V7leTtF', 'https://imgur.com/3Ii4Ztx', 'https://imgur.com/liALssZ']},
    { id: 2, name: 'Dudley', adopted: false, images: []},
    { id: 3, name: 'Iron Man', adopted: false, images: []},
    { id: 4, name: 'Falcon', adopted: false, images: []},
  ]
  getKittens(): Kitten[] {
    return this.KITTENS
  }
}
