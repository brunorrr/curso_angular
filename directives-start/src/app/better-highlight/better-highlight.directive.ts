import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  //Property of the directive
  @Input() defaultColor: string = 'transparent';
  // This property uses a alias with the same name of the directive, so when the directive recieves some value
  // this value is set on the property
  @Input('appBetterHighlight') highlightColor: string = 'blue';

  //One-way association for change some attribute for an element, in this case, the background color
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor( private elementRef: ElementRef, private rederer: Renderer2) { }

  ngOnInit(){
    // this.rederer.setStyle( this.elementRef.nativeElement, 'background-color', 'blue' );
    this.backgroundColor = this.defaultColor;
  }

  //Listener of events of DOM, in this case the mouseOver method is being called every time
  //that the mouseenter event happens
  @HostListener('mouseenter') mouseOver( eventData: Event ){
    // this.rederer.setStyle( this.elementRef.nativeElement, 'background-color', 'blue' );
    //When the backgroundColor attribute is changed, angular change the associated attribute of the element in the DOM
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave( eventData: Event ){
    // this.rederer.setStyle( this.elementRef.nativeElement, 'background-color', 'transparent' );
    this.backgroundColor = this.defaultColor;
  }

}
