export type ReceiptInstructions = {
    flour: number;
    water: number;
    yeast: number;
    salt: number;
}

export type Yeast = "ADY" | "IDY" | "CY";

type RecipeInputs = {
    temperature: number;
    yeast: Yeast;
    balls: number;
    hydration: number;
}

export class RecipeGenerator {

    generate(inputs: RecipeInputs): ReceiptInstructions {
        const totalDoughWeight = 270 * inputs.balls;
        const waterWeight = Math.round(totalDoughWeight * (1 - (inputs.hydration / 100)));
        const flourWeight = totalDoughWeight - waterWeight;
        return {
            flour: flourWeight,
            water: waterWeight,
            yeast: 12,
            salt: parseFloat((totalDoughWeight * 0.00925).toFixed(1))
        }
    }

}
