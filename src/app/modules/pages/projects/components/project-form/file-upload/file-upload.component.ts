import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: FileUploadComponent,
      multi: true
    }
  ]
})
export class FileUploadComponent implements ControlValueAccessor {
  @Input() progress;
  @Output() selectedFile: EventEmitter<any> = new EventEmitter();
  // tslint:disable-next-line:ban-types
  onChange: Function;
  public file: File | null = null;

  @HostListener('change', ['$event.target.files']) emitFiles( event: FileList ) {

    const file = event && event.item(0);
    if (file) {
      const mimeType = file.type;
      if (!mimeType.includes('image')) {
        alert('Only images are allowed to be uploaded');
        this.writeValue(null);
        return;
      } else {
        this.onChange(file);
        this.file = file;
        this.selectedFile.emit(this.file); // Send the file..
      }
    }
  }

  constructor( private host: ElementRef<HTMLInputElement> ) {
  }

  writeValue( value: null ) {
    // clear file input
    this.host.nativeElement.value = '';
    this.file = null;
  }

  // tslint:disable-next-line:ban-types
  registerOnChange( fn: Function ) {
    this.onChange = fn;
  }
  // tslint:disable-next-line:ban-types
  registerOnTouched( fn: Function ) {
  }

}
