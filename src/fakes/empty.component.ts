import { Component } from '@angular/core';

export class FakeComponentFactory {
  static createFakeComponent(selector: string) {
    @Component({
      selector,
      template: '',
    })
    class EmptyComponent {}

    return EmptyComponent;
  }
}
