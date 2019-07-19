import { Component, OnInit } from '@angular/core';
import { StrategyService } from './strategy.service';
import { Strategy } from './shared/models/strategy.model';

@Component({
  selector: 'app-strategies',
  templateUrl: './strategies.component.html',
  styleUrls: ['./strategies.component.scss']
})
export class StrategiesComponent implements OnInit {

  strategies: Strategy[];
  constructor(private strategyService: StrategyService) { }

  ngOnInit() {
    this.strategyService.getStrategies().subscribe((strategies)=>{
      this.strategies = strategies;
    });
  }
}
