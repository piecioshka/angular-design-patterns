import { Component, Input } from '@angular/core';

import { MediaButton } from 'src/app/patterns/composition/interfaces/media-button.interface';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.css'],
})
export class MediaComponent {
  @Input() media: HTMLMediaElement = null;
  @Input('buttons') additionalButtons: MediaButton[] = [];

  private mediaButtons: MediaButton[] = [
    {
      label: 'Play',
      className: 'btn-primary',
      onClick: () => this.play(),
    },
    {
      label: 'Stop',
      className: 'btn-danger',
      onClick: () => this.stop(),
    },
  ];

  get buttons() {
    return [...this.mediaButtons, ...this.additionalButtons];
  }

  play() {
    this.media.play();
  }

  stop() {
    this.media.pause();
    this.media.currentTime = 0;
  }
}
