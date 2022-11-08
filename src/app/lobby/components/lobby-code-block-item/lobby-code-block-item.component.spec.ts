import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyCodeBlockItemComponent } from './lobby-code-block-item.component';

describe('LobbyCodeBlockItemComponent', () => {
  let component: LobbyCodeBlockItemComponent;
  let fixture: ComponentFixture<LobbyCodeBlockItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LobbyCodeBlockItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LobbyCodeBlockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
