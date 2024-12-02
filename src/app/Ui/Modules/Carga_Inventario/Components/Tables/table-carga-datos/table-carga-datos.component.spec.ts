import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCargaDatosComponent } from './table-carga-datos.component';

describe('TableCargaDatosComponent', () => {
  let component: TableCargaDatosComponent;
  let fixture: ComponentFixture<TableCargaDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableCargaDatosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableCargaDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
