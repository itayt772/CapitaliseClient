import { Component, Input, SimpleChanges, OnInit } from "@angular/core";

@Component({
  selector: "app-gauge-widget",
  templateUrl: "./gauge-widget.component.html",
  styleUrls: ["./gauge-widget.component.scss"]
})
export class GaugeWidgetComponent implements OnInit {
  @Input() minValue: number;
  @Input() maxValue: number;
  @Input() currentValue: number;

  height: number = 200; //Todo: Custom @Input
  width: number = 200; //Todo: Custom @Input

  private x1: number;
  private y1: number;

  private x2: number;
  private y2: number;

  ngOnInit(): void {
    this.x1 = this.width / 2;
    this.y1 = this.height / 2;

    this.calculatePointOnCircle();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (
      changes.currentValue.currentValue !==
        changes.currentValue.previousValue &&
      !changes.currentValue.firstChange
    ) {
      this.calculatePointOnCircle();
    }
  }

  calculatePointOnCircle() {
    const range = this.maxValue - this.minValue;
    const angle = (180 / range) * (this.currentValue - range) + 180;
    const angleInRadians = (angle * Math.PI) / 180;
    const radius = this.width / 2;

    this.x2 = Math.round(Math.cos(angleInRadians) * radius + this.x1);
    this.y2 = Math.round(Math.sin(angleInRadians) * radius + this.y1);
  }
}
