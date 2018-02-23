import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/*
  This is a structure directive
*/

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  //Method property
  //Note that the method name needs to be the same of the directive name, in this case appUnless
  @Input() set appUnless( condition: boolean ){
    if(!condition){
      //If the condition is true the element is rendered inside the view container element
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else{
      //If it's not ture the parent element is cleared
      this.vcRef.clear();
    }
  }

  /*
    With a structure directive we need to send the template reference which is the element the directive is on,
    and the view container references, which is the element which the template is inside
  */
  constructor( private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef ) { }

}
