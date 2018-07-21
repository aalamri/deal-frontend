import {Component, OnInit} from '@angular/core';
import {DealService} from '../../shared/deal/deal.service';
import { Deal } from '../../shared/deal/deal.model';

@Component({
  selector: 'app-deal-list',
  templateUrl: './deal-list.component.html',
  styleUrls: ['./deal-list.component.css']
})
export class DealListComponent implements OnInit {
  deals: Array<any>;

  constructor(private dealService: DealService) {
  }

  ngOnInit() {
    this.dealService.getAll().subscribe(data => this.deals = data);
    }

  deleteDeal(deal: Deal): void {
    this.dealService.deleteDeal(deal)
      .subscribe( data => {
        this.deals = this.deals.filter(u => u !== deal);
      })
  };

  createDeal(): void {
    this.dealService.createDeal(this.deals)
      .subscribe( data => {
        alert("Deal created successfully.");
      });

  };
}

