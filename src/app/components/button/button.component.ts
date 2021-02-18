import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() name = '';
  @Input() disabled = false;
  @Output() handleClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.handleClick.emit();
  }
}
