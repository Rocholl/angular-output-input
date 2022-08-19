import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Player } from '../player';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  @Input() player: Player | any;
  @Output() playerSelected = new EventEmitter();
  @Output() prioritySelected = new EventEmitter();
  @Output() favouriteSelected = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }
  public delete(): void {
    this.playerSelected.emit(this.player);

  }
  public favourite(): void {
    this.favouriteSelected.emit(this.player);

  }
  public priority(): void {
    this.prioritySelected.emit(this.player);

  }
}
