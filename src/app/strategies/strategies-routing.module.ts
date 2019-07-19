import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { StrategiesComponent } from "./strategies.component";
import { StrategyDetailsComponent } from "./strategy-details/strategy-details.component";

const routes: Routes = [
  {
    path: "my-strategies",
    component: StrategiesComponent
  },
  {
    path: "strategy/:id",
    component: StrategyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StrategiesRoutingModule {}
