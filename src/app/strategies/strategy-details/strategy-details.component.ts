import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { StrategyService } from '../strategy.service';
import { Strategy } from '../shared/models/strategy.model';

@Component({
  selector: 'app-strategy-details',
  templateUrl: './strategy-details.component.html',
  styleUrls: ['./strategy-details.component.scss']
})
export class StrategyDetailsComponent implements OnInit {

  strategy: Strategy;

  constructor(
    private route: ActivatedRoute,
    private strategyService: StrategyService) { }

  ngOnInit() {
    const strategyId = this.route.snapshot.paramMap.get("id");

    //Todo: OnDestory unsubsrice
    this.strategyService.getMessages().subscribe((strategy)=>{
      if(strategy.id === strategyId){
        this.strategy = strategy;
      }
    });

    this.setStrategy(strategyId);
  }

  private setStrategy(id: string){
    const strategyId = this.route.snapshot.paramMap.get("id");
    this.strategyService.getStrategyById(strategyId).subscribe((strategy)=>{
      this.strategy = strategy;
    });
  }
}
