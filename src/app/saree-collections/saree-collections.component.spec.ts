import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SareeCollectionsComponent } from './saree-collections.component';

describe('SareeCollectionsComponent', () => {
  let component: SareeCollectionsComponent;
  let fixture: ComponentFixture<SareeCollectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SareeCollectionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SareeCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
