import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveAuthorComponent } from './save-author.component';

describe('SaveAuthorComponent', () => {
  let component: SaveAuthorComponent;
  let fixture: ComponentFixture<SaveAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaveAuthorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
