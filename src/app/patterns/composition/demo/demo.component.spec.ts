import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoComponent } from './demo.component';
import { VideoComponent } from 'src/app/patterns/inheritance/components/video/video.component';
import { AudioComponent } from 'src/app/patterns/inheritance/components/audio/audio.component';

describe('DemoComponent', () => {
  let component: DemoComponent;
  let fixture: ComponentFixture<DemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DemoComponent, VideoComponent, AudioComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
