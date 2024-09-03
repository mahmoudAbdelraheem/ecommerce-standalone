import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appImgShadow]',
  standalone: true
})
export class ImgShadowDirective implements OnChanges {
  @Input('appImgShadow') ImgRadius: string = '10px';
  constructor(public selectedElement:ElementRef ) { }
  ngOnChanges(): void {
    this.selectedElement.nativeElement.style.opacity = 0.8;
  }

  @HostListener ('mouseenter') onMouseEnter() {
    this.selectedElement.nativeElement.style.boxShadow ='10px 10px 5px grey';
    this.selectedElement.nativeElement.style.borderRadius = this.ImgRadius;
    this.selectedElement.nativeElement.style.opacity = 1;

    this.selectedElement.nativeElement.style.transition = 'all 0.5s ease';
  }
  @HostListener ('mouseleave') onMouseLeave() {
  this.selectedElement.nativeElement.style.boxShadow = '';
  this.selectedElement.nativeElement.style.borderRadius = '';
    this.selectedElement.nativeElement.style.opacity = 0.8;

  this.selectedElement.nativeElement.style.transition = 'all 0.5s ease';

}
}


