import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoComponent } from './video.component';
import { MediaComponent } from 'src/app/patterns/composition/components/media/media.component';

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VideoComponent, MediaComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
