import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotmatchComponent } from './notmatch.component';

describe('NotmatchComponent', () => {
  let component: NotmatchComponent;
  let fixture: ComponentFixture<NotmatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotmatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
