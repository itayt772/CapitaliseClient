import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./layout/header/header.component";
import { FooterComponent } from "./layout/footer/footer.component";
import { GaugeWidgetComponent } from "./gauge-widget/gauge-widget.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    GaugeWidgetComponent,
    SidebarComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    GaugeWidgetComponent,
    SidebarComponent
  ]
})
export class SharedModule {}
