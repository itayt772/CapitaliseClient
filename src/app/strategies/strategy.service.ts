import { Observable, of, interval, BehaviorSubject, Subject } from "rxjs";
import { Strategy } from "./shared/models/strategy.model";
import { strategies } from "./shared/models/strategy-mock";
import { Injectable } from "@angular/core";
import { UtilsService } from "../shared/utils.service";

@Injectable()
export class StrategyService {
  private messagesSubject = new Subject<Strategy>();

  constructor(private utilService: UtilsService) {
    this.triggerMessages();
  }

  private triggerMessages() {
    setInterval(() => {
      this.getStrategies().subscribe(strategies => {
        const randomStrategyIndex = this.utilService.getRandomInt(
          0,
          strategies.length - 1
        );
        let strategy = strategies[randomStrategyIndex];

        strategy.conditions.forEach(condtion => {
          condtion.value = this.utilService.getRandomInt(
            condtion.min,
            condtion.max
          );
        });

        this.messagesSubject.next(strategy);
      });
    }, 300);
  }

  getStrategies(): Observable<Strategy[]> {
    return of(strategies);
  }

  getStrategyById(id: string): Observable<Strategy> {
    return of(strategies.find(x => x.id === id));
  }

  getMessages(): Observable<Strategy> {
    return this.messagesSubject.asObservable();
  }
}
