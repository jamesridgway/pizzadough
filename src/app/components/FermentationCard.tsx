import { Slider } from "./Slider";
import { Clock, Info } from "lucide-react";
import { YeastEntry } from "../data";

interface FermentationCardProps {
  temp: number;
  onTempChange: (value: number[]) => void;
  yeast: YeastEntry | undefined;
  fermentationHours: number;
  onFermentationHoursChange: (value: number[]) => void;
  onInfoClick: () => void;
}

export function FermentationCard({
  temp,
  onTempChange,
  yeast,
  fermentationHours,
  onFermentationHoursChange,
  onInfoClick,
}: FermentationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <div className="flex items-center mb-6">
        <Clock className="h-6 w-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-semibold text-gray-900">Fermentation</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <Slider
            value={[temp]}
            onValueChange={onTempChange}
            min={10}
            max={30}
            step={0.1}
            label="Proofing temperature"
            unit="°C"
          />
          <p className="text-sm text-gray-500 mt-1">Temperature for dough fermentation</p>
        </div>

        {yeast && (
          <div>
            <Slider
              value={[fermentationHours]}
              onValueChange={onFermentationHoursChange}
              min={Math.min(...yeast.fermentation_hours.map(x => x.hours))}
              max={Math.max(...yeast.fermentation_hours.map(x => x.hours))}
              step={1}
              label="Fermentation time"
              unit=" hours"
            />
            <div className="flex items-center justify-between">
              <p className="text-sm text-gray-500 mt-1">Time for dough fermentation</p>
              <button
                onClick={onInfoClick}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-800 transition-colors cursor-pointer"
              >
                <Info className="h-4 w-4" />
              </button>
            </div>
            
            <div className="mt-4">
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 