import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreComponent } from './components/core/core.component';
import { CoreRoutingModule } from 'src/app/core/core-routing.module';

@NgModule({
  imports: [BrowserModule, CoreRoutingModule],
  declarations: [CoreComponent],
  providers: [],
  bootstrap: [CoreComponent],
})
export class CoreModule {}
