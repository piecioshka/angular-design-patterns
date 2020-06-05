import { Component, Input, ElementRef } from '@angular/core';

import { MediaButton } from 'src/app/patterns/composition/interfaces/media-button.interface';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent {
  @Input() source: string = null;

  media: HTMLVideoElement = null;

  constructor(protected el: ElementRef) {}

  ngOnInit(): void {
    this.media = this.el.nativeElement.querySelector('video');
  }

  buttons: MediaButton[] = [
    {
      label: 'Fullscreen',
      className: 'btn-success',
      onClick: () => this.fullscreen(),
    },
  ];

  fullscreen() {
    this.media.requestFullscreen();
  }
}
