import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SouthwestPage } from './southwest.page';

describe('SouthwestPage', () => {
  let component: SouthwestPage;
  let fixture: ComponentFixture<SouthwestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SouthwestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SouthwestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
