import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-media',
  template: '',
})
export abstract class MediaComponent {
  @Input() source: string = null;

  protected $el: HTMLMediaElement = null;

  constructor(protected el: ElementRef) {}

  play() {
    this.$el.play();
  }

  stop() {
    this.$el.pause();
    this.$el.currentTime = 0;
  }
}
