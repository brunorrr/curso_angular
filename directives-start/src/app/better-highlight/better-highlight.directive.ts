import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor( private elementRef: ElementRef, private rederer: Renderer2) { }

  ngOnInit(){
    // this.rederer.setStyle( this.elementRef.nativeElement, 'background-color', 'blue' );
  }

  @HostListener('mouseenter') mouseOver( eventData: Event ){
    this.rederer.setStyle( this.elementRef.nativeElement, 'background-color', 'blue' );
  }

  @HostListener('mouseleave') mouseLeave( eventData: Event ){
    this.rederer.setStyle( this.elementRef.nativeElement, 'background-color', 'transparent' );
  }

}
