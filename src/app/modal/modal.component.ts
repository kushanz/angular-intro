import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import {trigger,transition,style,animate,query,group,animateChild} from '@angular/animations';

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  animations:[
    trigger('modalAnimate',[
      transition(':enter',[
        group([
          query('.modal-container',[
            style({opacity:0,transform:'scale(0.9)'}),
            animate(1000)
          ]),
          query('@modalAnimate',animateChild())
        ])
      ]),
      
    ])
  ]
})
export class ModalComponent implements OnInit {
@Output() public closeModal:EventEmitter<boolean> = new EventEmitter<boolean>()
  constructor() { }

  ngOnInit() {
  }
  close() {
    this.closeModal.emit(false);
  }
}