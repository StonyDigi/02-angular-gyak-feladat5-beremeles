export class DolgozoModel {
    private beosztas: string = '';
    private bruttoBer: number = 0;

    setBeosztas(beosztas: string): void {
        this.beosztas = beosztas;
    }

    setBruttoBer(bruttoBer: number): void {
        this.bruttoBer = bruttoBer;
    }

    getBeosztas(): string {
        return this.beosztas;
    }

    getBruttoBer(): number {
        return this.bruttoBer;
    }

    szamolBeremeles(): number {
        switch (this.beosztas.toLocaleLowerCase()) {
            case 'programozó':
                return this.bruttoBer * 0.3;
            case 'grafikus':
                return this.bruttoBer * 0.2;
            case 'ügyintéző':
                return this.bruttoBer * 0.1;
            default:
                return 0;                
        }
    }

    szamolUjBruttoBer(): number {
        return this.bruttoBer + this.szamolBeremeles();
    }
}