/* tslint:disable:no-unused-variable */

import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';

import { CounterComponent } from './counter.component';

let comp:    CounterComponent;
let fixture: ComponentFixture<CounterComponent>;
let de:      DebugElement;
let el:      HTMLElement;

describe('CounterComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterComponent ], // declare the test component
    });

    fixture = TestBed.createComponent(CounterComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <h1> by CSS element selector
    // de = fixture.debugElement.query(By.css('h1'));
    // el = de.nativeElement;

  });

  it('should display original title', () => {
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('span')).nativeElement.textContent).toContain('0');
  });

  it('should display a different test title', () => {
    comp.inc();
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('span')).nativeElement.textContent).toContain('12');
  });

});

// describe('App: Angular2Playground', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [
//         CounterComponent
//       ],
//     });
//   });
//
//   it('should create the app', async(() => {
//     let fixture = TestBed.createComponent(CounterComponent);
//     let app = fixture.debugElement.componentInstance;
//     expect(app).toBeTruthy();
//   }));
//
//   it('should render title with `0`', async(() => {
//     let fixture = TestBed.createComponent(CounterComponent);
//     fixture.detectChanges();
//     let compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('span').textContent).toContain('0');
//   }));
//
//   it('should render botton with `inc`', async(() => {
//     let fixture = TestBed.createComponent(CounterComponent);
//     fixture.detectChanges();
//     let compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('.inc').textContent).toContain('inc');
//   }));
//
//   it('should render botton with `dec`', async(() => {
//     let fixture = TestBed.createComponent(CounterComponent);
//     fixture.detectChanges();
//     let compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('.dec').textContent).toContain('dec');
//   }));
//
//   it('should render botton with `dec`', async(() => {
//     let fixture = TestBed.createComponent(CounterComponent);
//     fixture
//     fixture.detectChanges();
//     let compiled = fixture.debugElement.nativeElement;
//     expect(compiled.querySelector('.dec').textContent).toContain('dec');
//   }));
// });
