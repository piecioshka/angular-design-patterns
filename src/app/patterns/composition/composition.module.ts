import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompositionRoutingModule } from 'src/app/patterns/composition/composition-routing.module';
import { DemoComponent } from 'src/app/patterns/composition/demo/demo.component';
import { VideoComponent } from 'src/app/patterns/composition/components/video/video.component';
import { AudioComponent } from 'src/app/patterns/composition/components/audio/audio.component';
import { MediaComponent } from 'src/app/patterns/composition/components/media/media.component';

@NgModule({
  imports: [CommonModule, CompositionRoutingModule],
  declarations: [DemoComponent, VideoComponent, AudioComponent, MediaComponent]
})
export class CompositionModule {}
