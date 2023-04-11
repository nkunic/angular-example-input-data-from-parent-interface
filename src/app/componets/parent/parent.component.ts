import { Component } from '@angular/core';
import { ItemModel } from '../../model/item.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent {

  items: ItemModel[] = [
    {
      name: 'John',
      surname: 'Doe'
    },
    {
      name: 'Jane',
      surname: 'Doe'
    },
    {
      name: 'Max',
      surname: 'Mustermann',
      disabled: true
    },
  ];

}