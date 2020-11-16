import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoutheastPage } from './southeast.page';

describe('SoutheastPage', () => {
  let component: SoutheastPage;
  let fixture: ComponentFixture<SoutheastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoutheastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoutheastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
