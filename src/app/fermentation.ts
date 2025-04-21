import { FERMENTATION_DATA, YeastEntry } from "./data";

export function getFermentationHours(temp: number): YeastEntry {
    return FERMENTATION_DATA.reduce((closest, current) => {
        const currentDiff = Math.abs(current.temperature - temp);
        const closestDiff = Math.abs(closest.temperature - temp);
        return currentDiff < closestDiff ? current : closest;
      });
    
}