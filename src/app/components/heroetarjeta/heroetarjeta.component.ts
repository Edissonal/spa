import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-heroetarjeta',
  templateUrl: './heroetarjeta.component.html',
  styleUrls: ['./heroetarjeta.component.css']
})
export class HeroetarjetaComponent implements OnInit {


  @Input() heroe: any = {};
  @Input() index: number;

  @Output() heroeseleccionado: EventEmitter<number>;
  constructor(private router: Router) { 
    
    this.heroeseleccionado = new EventEmitter();
  }

  ngOnInit() {
  }
  verHeroe() {
   // console.log(this.index);
   this.router.navigate(['/heroe',this.index])
   // this.heroeseleccionado.emit(this.index);

  }

}
