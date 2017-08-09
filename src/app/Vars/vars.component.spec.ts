import {VarsComponent} from "./vars.component"
import {ComponentFixture, TestBed} from "@angular/core/testing";
import { async } from '@angular/core/testing';
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";
import {RouterTestingModule} from "@angular/router/testing"

describe('Vars component tests',()=>{

  let comp:    VarsComponent;
  let fixture: ComponentFixture<VarsComponent>;
  let de:      DebugElement[];
  let el1:      HTMLElement;
  let el2:      HTMLElement;
  let el3:      HTMLElement;
  let el4:      HTMLElement;
  let el5:      HTMLElement;
  let el6:      HTMLElement;
  let el7:      HTMLElement;


  // async beforeEach
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ VarsComponent ],
      providers:[{provide:RouterTestingModule}]// declare the test component
    })
      .compileComponents();  // compile template and css
  }));

  // synchronous beforeEach
  beforeEach(() => {
    fixture = TestBed.createComponent(VarsComponent);

    comp = fixture.componentInstance; // BannerComponent test instance

    // query for the title <a> by CSS element selector
    de = fixture.debugElement.queryAll(By.css('a'));
    el1=de[0].nativeElement;
    el2=de[1].nativeElement;
    el3=de[2].nativeElement;
    el4=de[3].nativeElement;
    el5=de[4].nativeElement;
    el6=de[5].nativeElement;
    el7=de[6].nativeElement;

  });



  it('should navigate to vars/products', ()=>{
    expect(el1.getAttribute('href')).toBe('vars/products')
  });

  it('should navigate to vars/buyers', ()=>{
    expect(el2.getAttribute('href')).toBe('vars/buyers')
  });

  it('should navigate to vars/consignees', ()=>{
    expect(el3.getAttribute('href')).toBe('vars/consignees')
  });

  it('should navigate to vars/contries', ()=>{
    expect(el4.getAttribute('href')).toBe('vars/countries')
  });

  it('should navigate to vars/formulations', ()=>{
    expect(el5.getAttribute('href')).toBe('vars/formulations')
  });

  it('should navigate to vars/packages', ()=>{
    expect(el6.getAttribute('href')).toBe('vars/packages')
  });

  it('should navigate to vars/ports', ()=>{
    expect(el7.getAttribute('href')).toBe('vars/ports')
  });



  it('should contains  Products',()=>

    expect(el1.textContent).toBe('Products')
  );

  it('should contains  Buyers',()=>

    expect(el2.textContent).toBe('Buyers')
  );

  it('should contains  Consigees',()=>

    expect(el3.textContent).toBe('Consignees')
  );

  it('should contains  Countries',()=>

    expect(el4.textContent).toBe('Countries')
  );

  it('should contains  Formulations',()=>

    expect(el5.textContent).toBe('Formulations')
  );

  it('should contains  Package ',()=>

    expect(el6.textContent).toBe('Package')
  );

  it('should contains  Ports',()=>

    expect(el7.textContent).toBe('Ports')
  );

});
