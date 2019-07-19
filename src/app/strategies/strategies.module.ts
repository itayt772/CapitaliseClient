import { NgModule } from "@angular/core";

import { SharedModule } from "../shared/shared.module";
import { StrategiesComponent } from "./strategies.component";
import { StrategyDetailsComponent } from "./strategy-details/strategy-details.component";
import { StrategiesRoutingModule } from "./strategies-routing.module";

@NgModule({
  declarations: [StrategiesComponent, StrategyDetailsComponent],
  imports: [SharedModule, StrategiesRoutingModule]
})
export class StrategiesModule {}
