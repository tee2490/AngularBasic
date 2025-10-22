import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostBinding,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('colorInput') colorInput!: ElementRef<HTMLInputElement>; // กำหนดชนิดให้ชัดและใช้ !

  @HostBinding('style.backgroundColor')
  selectedColor = '';

  // ฟังเหตุการณ์ input จาก host หรือจะผูกกับ element ก็ได้
  @HostListener('input', ['$event'])
  onColorChange(e: Event) {
    const target = e.target as HTMLInputElement; // cast เป็น HTMLInputElement
    this.selectedColor = target.value ?? ''; // ป้องกันกรณี undefined
  }

  ngAfterViewInit(): void {
    this.selectedColor = this.colorInput.nativeElement.value ?? '';
  }
}
