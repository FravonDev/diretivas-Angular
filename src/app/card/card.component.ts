import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos: string[] = []
  menuType: string = "uaser";
  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "monitor",
      "computador"
    ]
  }

  adicionar():void {
    this.produtos.push('Fravon')
  }

  remover(index:number):void {
    this.produtos.splice(index, 1)
  }

  ngOnInit(): void {
  }


}
