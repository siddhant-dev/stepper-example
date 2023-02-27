import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, Input, OnInit, QueryList, ViewChildren, ViewContainerRef } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
@Component({
  selector: "app-step-one",
  template: ` <h1>{{data}}</h1> `
})
export class StepOneComponent {
  @Input() data: any;
}
@Component({
  selector: "app-step-two",
  template: ` <h1>Sid</h1> `
})
export class StepTwoComponent {
  @Input() data: any;
}
@Component({
  selector: "app-step-three",
  template: ` <h1>Sid</h1> `
})
export class StepThreeComponent {
  @Input() data: any;
}
@Component({
  selector: 'app-step-example',
  templateUrl: './step-example.component.html',
  styleUrls: ['./step-example.component.scss']
})
export class StepExampleComponent implements AfterViewInit {
inputData= 'SA';
@ViewChildren('viewRef', {read: ViewContainerRef}) public viewRef! : QueryList<ViewContainerRef>;
  constructor() { }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.viewRef.forEach((view: ViewContainerRef, index) => {
        view.clear();
        const componentRef = view.createComponent(this.steps[index].component);
        componentRef.instance.data = this.inputData;
      });
    })
  }

  steps = [
    { label: 'Step 1', component: StepOneComponent , state: 'phone'},
    { label: 'Step 2', component: StepTwoComponent , state: 'chat'},
    { label: 'Step 3', component: StepThreeComponent , state:'phone'},
  ];

  goBack(stepper: MatStepper) {
    stepper.previous();
  }

  goForward(stepper: MatStepper) {
    stepper.next();
  }

}
