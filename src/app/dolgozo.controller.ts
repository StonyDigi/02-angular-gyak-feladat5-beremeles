import { DolgozoModel } from './dolgozo.model';

export class DolgozoController {
    private model: DolgozoModel;

    constructor(model: DolgozoModel) {
        this.model = model;
    }

    setBeosztas(beosztas: string): void {
        this.model.setBeosztas(beosztas);
    }

    setBruttoBer(bruttoBer: number): void {
        this.model.setBruttoBer(bruttoBer);
    }

    getBeosztas(): string {
        return this.model.getBeosztas();
    }

    getBruttoBer(): number {
        return this.model.getBruttoBer();
    }

    szamolBeremeles(): number {
        return this.model.szamolBeremeles();
    }

    szamolUjBruttoBer(): number {
        return this.model.szamolUjBruttoBer();
    }


}