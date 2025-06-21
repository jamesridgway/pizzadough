import { FERMENTATION_DATA, FermentationHour, YeastEntry } from './data';

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
    fermentationHours: number;
}

export class RecipeGenerator {

    generate(inputs: RecipeInputs): ReceiptInstructions {
        const totalDoughWeight = 270 * inputs.balls;
        const flourWeight = Math.round(totalDoughWeight / (1 + inputs.hydration / 100));
        const waterWeight = totalDoughWeight - flourWeight;
        
        // Calculate yeast amount based on fermentation hours
        const yeastAmount = this.calculateYeastAmount(inputs.fermentationHours, inputs.yeast, inputs.temperature, inputs.balls);
        
        return {
            flour: flourWeight,
            water: waterWeight,
            yeast: yeastAmount,
            salt: parseFloat((totalDoughWeight * 0.0185).toFixed(1))
        }
    }

    private calculateYeastAmount(fermentationHours: number, yeastType: Yeast, temperature: number, balls: number): number {
        // Find the closest temperature entry
        const tempEntry = FERMENTATION_DATA.reduce((closest: YeastEntry, current: YeastEntry) => {
            const currentDiff = Math.abs(current.temperature - temperature);
            const closestDiff = Math.abs(closest.temperature - temperature);
            return currentDiff < closestDiff ? current : closest;
        });
        
        // Find the closest fermentation hours entry
        const hourEntry = tempEntry.fermentation_hours.reduce((closest: FermentationHour, current: FermentationHour) => {
            const currentDiff = Math.abs(current.hours - fermentationHours);
            const closestDiff = Math.abs(closest.hours - fermentationHours);
            return currentDiff < closestDiff ? current : closest;
        });
        
        // Get the yeast percentage based on type
        const yeastPercentage = yeastType === 'ADY' ? hourEntry.ady : 
                               yeastType === 'IDY' ? hourEntry.idy : 
                               hourEntry.cy;
        
        // Calculate total dough weight for yeast calculation
        const totalDoughWeight = 270 * balls;
        return parseFloat((totalDoughWeight * yeastPercentage).toFixed(2));
    }
}
