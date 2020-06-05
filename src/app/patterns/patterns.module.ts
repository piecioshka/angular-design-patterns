import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatternsRoutingModule } from 'src/app/patterns/patterns-routing.module';
import { DemoComponent } from './inheritance/demo/demo.component';
import { VideoComponent } from './inheritance/components/video/video.component';
import { AudioComponent } from './inheritance/components/audio/audio.component';

@NgModule({
  imports: [CommonModule, PatternsRoutingModule],
  declarations: [DemoComponent, VideoComponent, AudioComponent],
})
export class PatternsModule {}
