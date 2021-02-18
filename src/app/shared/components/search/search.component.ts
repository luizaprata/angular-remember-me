import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit, OnDestroy {
  @Output() handleTyping = new EventEmitter<string>();

  debounce: Subject<string> = new Subject<string>();

  constructor() {}

  ngOnInit(): void {
    this.debounce.pipe(debounceTime(300)).subscribe((value: string) => {
      this.handleTyping.emit(value);
    });
  }

  emitFilter(event: KeyboardEvent): void {
    const element = event.target as HTMLInputElement;
    this.debounce.next(element.value);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }
}
