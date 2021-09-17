import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BudgetItem} from "../../shared/models/budget-item-model";

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {

  // @ts-ignore
  @Input() budgetItems: BudgetItem[];
  @Output() delete: EventEmitter<BudgetItem> = new EventEmitter<BudgetItem>();

  constructor() { }

  ngOnInit(): void {
  }

  onDeleteButtonClicked(item: BudgetItem) {
    this.delete.emit(item);
  }

}
