import { Component, OnInit } from '@angular/core';
import { Kitten } from '../kittens';
import { KittensService } from '../kittens.service';

@Component({
  selector: 'app-kittens',
  templateUrl: './kittens.component.html',
  styleUrls: ['./kittens.component.css']
})
export class KittensComponent implements OnInit {
  kittens: Kitten[] = [];
  constructor(service: KittensService) { 
    this.kittens = service.getKittens()
  }
  ngOnInit(): void {
  }

}
