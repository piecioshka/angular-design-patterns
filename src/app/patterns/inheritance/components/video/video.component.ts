import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { MediaComponent } from 'src/app/patterns/inheritance/components/media/media.component';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css'],
})
export class VideoComponent extends MediaComponent implements OnInit {
  protected $el: HTMLVideoElement = null;

  ngOnInit(): void {
    this.$el = this.el.nativeElement.querySelector('video');
  }

  fullscreen() {
    this.$el.requestFullscreen();
  }
}
