import { NgModule } from "@angular/core";

import { StrategyService } from "./strategies/strategy.service";
import { UtilsService } from "./shared/utils.service";

@NgModule({
  providers: [StrategyService, UtilsService]
})
export class CoreModule {}
