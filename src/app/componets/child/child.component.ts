import { Component, Input } from '@angular/core';
import { ItemModel } from '../../model/item.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Input() items: ItemModel[] = [];
}
