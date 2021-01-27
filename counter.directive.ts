import { Directive, ViewContainerRef, TemplateRef, Input, Attribute, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[counterOf]'
})
export class CounterDirective {
    constructor(private container: ViewContainerRef,
                private template: TemplateRef<object>) {}
    @Input('counterOf')
    counter: number;

    ngOnChanges(changes: SimpleChanges) {
      this.container.clear();
      if (typeof this.counter === 'undefined'){
        this.counter = 3;
      }
      for (let i = 0; i < this.counter; i++) {
        this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
      }
    }
}

class CounterDirectiveContext {
  constructor(public $implicit: any) {}
}