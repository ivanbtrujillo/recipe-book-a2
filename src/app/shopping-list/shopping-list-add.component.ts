import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-shopping-list-add',
  templateUrl: './shopping-list-add.component.html'
})
export class ShoppingListAddComponent implements OnInit {

  borrando: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  delete(){
    console.log('Borrando');
    this.borrando = true;
  }

}
