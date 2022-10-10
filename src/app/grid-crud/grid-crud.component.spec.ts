import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IgxGridModule, IgxActionStripModule } from 'igniteui-angular';
import { GridCrudComponent } from './grid-crud.component';

describe('GridCrudComponent', () => {
  let component: GridCrudComponent;
  let fixture: ComponentFixture<GridCrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCrudComponent ],
      imports: [ NoopAnimationsModule, FormsModule, HttpClientTestingModule, IgxGridModule, IgxActionStripModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
