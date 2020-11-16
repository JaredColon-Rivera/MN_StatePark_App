import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NortheastPage } from './northeast.page';

describe('NortheastPage', () => {
  let component: NortheastPage;
  let fixture: ComponentFixture<NortheastPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NortheastPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NortheastPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
