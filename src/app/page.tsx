"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { ReceiptInstructions, RecipeGenerator, Yeast } from "./recipe_generator";
import DisplayRecipeInstructions from "./components/DisplayRecipeInstructions";
import { getFermentationHours } from "./fermentation";
import { YeastEntry } from "./data";
import { Slider } from "./components/Slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/Select";
import { Pizza, Clock } from "lucide-react";

function Home() {
  const searchParams = useSearchParams();

  const getDefaultNumberValue = (name: string, defVal: number): number => {
    const parsed = parseInt(searchParams.get(name) ?? '', 10);
    return isNaN(parsed) ? defVal : parsed
  };

  const [balls, setBalls] = useState<number>(getDefaultNumberValue('balls', 6));
  const [temp, setTemp] = useState<number>(getDefaultNumberValue('temp', 16));
  const [hydration, setHydration] = useState<number>(getDefaultNumberValue('hydration', 62.5));
  const [yeastType, setYeastType] = useState<Yeast>(searchParams.get('yeast') as Yeast ?? 'ADY');
  const [instructions, setInstructions] = useState<ReceiptInstructions | undefined>(undefined);
  const [yeast, setYeast] = useState<YeastEntry | undefined>(undefined);

  useEffect(() => {
    const rg = new RecipeGenerator();
    setInstructions(rg.generate({
      balls, hydration, yeast: yeastType, temperature: temp
    }));
    setYeast(getFermentationHours(temp));
  },
  [balls, temp, hydration, yeastType]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Pizza className="h-12 w-12 text-orange-600 mr-3" />
            <h1 className="text-4xl font-bold text-gray-900">Pizza Dough Calculator</h1>
          </div>
          <p className="text-lg text-gray-600">Calculate the perfect pizza dough recipe with customizable parameters</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dough Requirements Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center mb-6">
              <Pizza className="h-6 w-6 text-orange-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">Dough Requirements</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <Slider
                  value={[balls]}
                  onValueChange={(value) => setBalls(value[0])}
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
                <Select value={yeastType} onValueChange={(value: Yeast) => setYeastType(value)}>
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
                  onValueChange={(value) => setHydration(value[0])}
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

          {/* Fermentation Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center mb-6">
              <Clock className="h-6 w-6 text-blue-600 mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">Fermentation</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <Slider
                  value={[temp]}
                  onValueChange={(value) => setTemp(value[0])}
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
                  <h3 className="text-lg font-medium text-gray-900 mb-3">Recommended Fermentation Times</h3>
                  <div className="space-y-2">
                    {yeast.fermentation_hours
                      .sort((a, b) => b.hours - a.hours)
                      .map((x, index) => {
                        const yeastPercentage = yeastType === 'ADY' ? x.ady * 100 : 
                                               yeastType === 'IDY' ? x.idy * 100 : 
                                               x.cy * 100;
                        return (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <span className="text-sm font-medium text-gray-700">
                              {x.hours} hours
                            </span>
                            <span className="text-xs text-gray-500">
                              {yeastPercentage.toFixed(2)}% yeast
                            </span>
                          </div>
                        );
                      })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Recipe Instructions */}
        {instructions && (
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <DisplayRecipeInstructions instructions={instructions} />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Home />
    </Suspense>
  );
}
