import { Slider } from "./Slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./Select";
import { Pizza } from "lucide-react";
import { Yeast } from "../recipe_generator";

interface DoughRequirementsCardProps {
  balls: number;
  onBallsChange: (value: number[]) => void;
  yeastType: Yeast;
  onYeastTypeChange: (value: Yeast) => void;
  hydration: number;
  onHydrationChange: (value: number[]) => void;
}

export function DoughRequirementsCard({
  balls,
  onBallsChange,
  yeastType,
  onYeastTypeChange,
  hydration,
  onHydrationChange,
}: DoughRequirementsCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
      <div className="flex items-center mb-6">
        <Pizza className="h-6 w-6 text-orange-600 mr-2" />
        <h2 className="text-2xl font-semibold text-gray-900">Dough Requirements</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <Slider
            value={[balls]}
            onValueChange={onBallsChange}
            min={1}
            max={20}
            step={1}
            label="Number of dough balls"
            unit=" balls"
          />
          <p className="text-sm text-gray-500 mt-1">Each ball will be 270 grams</p>
        </div>

        <div>
          <label className="text-sm font-medium text-gray-700 mb-2 block">Yeast Type</label>
          <Select value={yeastType} onValueChange={onYeastTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select yeast type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ADY">Active Dry Yeast (ADY)</SelectItem>
              <SelectItem value="IDY">Instant Dry Yeast (IDY)</SelectItem>
              <SelectItem value="CY">Compressed Yeast (CY)</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Slider
            value={[hydration]}
            onValueChange={onHydrationChange}
            min={50}
            max={80}
            step={0.5}
            label="Dough hydration"
            unit="%"
          />
          <p className="text-sm text-gray-500 mt-1">Water content as percentage of flour weight</p>
        </div>
      </div>
    </div>
  );
} 