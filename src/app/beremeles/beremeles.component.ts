import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DolgozoController } from '../dolgozo.controller';
import { DolgozoModel } from '../dolgozo.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-beremeles',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './beremeles.component.html',
  styleUrl: './beremeles.component.css'
})
export class BeremelesComponent {
  private controller: DolgozoController = new DolgozoController(new DolgozoModel());

  beosztas: string = '';
  bruttoBer: number = 0;

  beremeles: number = 0;
  ujBruttoBer: number = 0;

  szamol(): void {
    this.controller.setBeosztas(this.beosztas);
    this.controller.setBruttoBer(this.bruttoBer);

    this.beremeles = this.controller.szamolBeremeles();
    this.ujBruttoBer =this.controller.szamolUjBruttoBer();
  }
}
