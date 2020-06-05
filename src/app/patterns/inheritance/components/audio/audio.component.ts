import { Component, OnInit } from '@angular/core';

import { MediaComponent } from 'src/app/patterns/inheritance/components/media/media.component';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css'],
})
export class AudioComponent extends MediaComponent implements OnInit {
  protected $el: HTMLAudioElement = null;

  ngOnInit(): void {
    this.$el = this.el.nativeElement.querySelector('audio');
  }
}
