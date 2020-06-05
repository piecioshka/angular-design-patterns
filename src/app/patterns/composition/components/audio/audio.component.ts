import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css'],
})
export class AudioComponent {
  @Input() source: string = null;

  media: HTMLAudioElement = null;

  constructor(protected el: ElementRef) {}

  ngOnInit(): void {
    this.media = this.el.nativeElement.querySelector('audio');
  }
}
