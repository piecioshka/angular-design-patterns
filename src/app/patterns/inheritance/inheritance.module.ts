import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InheritanceRoutingModule } from 'src/app/patterns/inheritance/inheritance-routing.module';
import { DemoComponent } from 'src/app/patterns/inheritance/demo/demo.component';
import { VideoComponent } from 'src/app/patterns/inheritance/components/video/video.component';
import { AudioComponent } from 'src/app/patterns/inheritance/components/audio/audio.component';

@NgModule({
  imports: [CommonModule, InheritanceRoutingModule],
  declarations: [DemoComponent, VideoComponent, AudioComponent]
})
export class InheritanceModule {}
