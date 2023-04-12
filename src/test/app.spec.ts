import {TriangleClassifier} from "../app";

describe("Check Triangle", () => {
    test("isEquilateralTriangle", () => {
        let triangle = new TriangleClassifier(2, 2, 2);
        let result = 'Tam giác đều';
        expect(triangle.check()).toBe(result);
    });

    test("isEquilateralTriangle", () => {
        let triangle = new TriangleClassifier(2, 2, 3);
        let result = 'Tam giác cân';
        expect(triangle.check()).toBe(result);
    });

    test("isEquilateralTriangle", () => {
        let triangle = new TriangleClassifier(3, 4, 5);
        let result = 'Tam giác thường';
        expect(triangle.check()).toBe(result);
    });

    test("isEquilateralTriangle", () => {
        let triangle = new TriangleClassifier(8, 2, 3);
        let result = 'Không phải là tam giác';
        expect(triangle.check()).toBe(result);
    });

    test("isEquilateralTriangle", () => {
        let triangle = new TriangleClassifier(-1, 2, 1);
        let result = 'Không phải là tam giác';
        expect(triangle.check()).toBe(result);
    });

    test("isEquilateralTriangle", () => {
        let triangle = new TriangleClassifier(0, 1, 1);
        let result = 'Không phải là tam giác';
        expect(triangle.check()).toBe(result);
    });
});