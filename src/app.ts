export class TriangleClassifier {
    sideA: number;
    sideB: number;
    sideC: number;

    constructor(a: number, b: number, c: number) {
        this.sideA = a;
        this.sideB = b;
        this.sideC = c;
    }

    check(): string {
        const isTriangle = this.sideA + this.sideB > this.sideC
            && this.sideB + this.sideC > this.sideA
            && this.sideA + this.sideC > this.sideB
            && this.sideA > 0 && this.sideB > 0 && this.sideC > 0;
        const isIsoscelesTriangle = this.sideA === this.sideB
            || this.sideB === this.sideC
            || this.sideC === this.sideA;
        const isEquilateralTriangle = this.sideA === this.sideB
            && this.sideB === this.sideC
            && this.sideC === this.sideA;
        if (isTriangle) {
            if (isEquilateralTriangle) {
                return 'Tam giác đều';
            } else if (isIsoscelesTriangle) {
                return 'Tam giác cân';
            } else return 'Tam giác thường';
        } else return 'Không phải là tam giác';
    }
}

