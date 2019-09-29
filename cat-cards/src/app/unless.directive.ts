import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

  // let get the conditions and bind something to a properties,
  // unless is a method to set the properties "XXXXX" cuando la propiedad cambia fuera de esta directiva
  // sugar sintax C#, var unless and a set method to the var?

  // <div *appUnless="conditionOrVariable"
  @Input() set appUnless(condition: boolean) {

    if (!condition) {
        this.vcRef.createEmbeddedView(this.templateRef);
    } else {
        this.vcRef.clear();
    }

  }
  // inyecting template html at constructor, first parameter sounds like WHAT, next parameter is WHERE vcRef or view container reference
  // cosas que inyecto las agrega al import automático @TODO add to the blogspot
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef ) { }

}
