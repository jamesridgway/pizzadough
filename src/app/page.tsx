"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";
import { ReceiptInstructions, RecipeGenerator, Yeast } from "./recipe_generator";
import DisplayRecipeInstructions from "./components/DisplayRecipeInstructions";
import { getFermentationHours } from "./fermentation";
import { YeastEntry } from "./data";
import { FermentationTimesModal } from "./components/FermentationTimesModal";
import { DoughRequirementsCard } from "./components/DoughRequirementsCard";
import { FermentationCard } from "./components/FermentationCard";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Home() {
  const searchParams = useSearchParams();

  const getDefaultNumberValue = (name: string, defVal: number): number => {
    const parsed = parseInt(searchParams.get(name) ?? '', 10);
    return isNaN(parsed) ? defVal : parsed
  };

  const [balls, setBalls] = useState<number>(getDefaultNumberValue('balls', 6));
  const [temp, setTemp] = useState<number>(getDefaultNumberValue('temp', 16));
  const [hydration, setHydration] = useState<number>(getDefaultNumberValue('hydration', 62.5));
  const [yeastType, setYeastType] = useState<Yeast>(searchParams.get('yeast') as Yeast ?? 'IDY');
  const [instructions, setInstructions] = useState<ReceiptInstructions | undefined>(undefined);
  const [yeast, setYeast] = useState<YeastEntry | undefined>(undefined);
  const [fermentationHours, setFermentationHours] = useState<number>(24);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    const rg = new RecipeGenerator();
    setInstructions(rg.generate({
      balls, hydration, yeast: yeastType, temperature: temp, fermentationHours
    }));
    setYeast(getFermentationHours(temp));
  },
  [balls, temp, hydration, yeastType, fermentationHours]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-2 py-8 max-w-4xl">
        {/* Header */}
        <Header currentPage="home" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Dough Requirements Card */}
          <DoughRequirementsCard
            balls={balls}
            onBallsChange={(value) => setBalls(value[0])}
            yeastType={yeastType}
            onYeastTypeChange={setYeastType}
            hydration={hydration}
            onHydrationChange={(value) => setHydration(value[0])}
          />

          {/* Fermentation Card */}
          <FermentationCard
            temp={temp}
            onTempChange={(value) => setTemp(value[0])}
            yeast={yeast}
            fermentationHours={fermentationHours}
            onFermentationHoursChange={(value) => setFermentationHours(value[0])}
            onInfoClick={() => setIsModalOpen(true)}
          />
        </div>

        {/* Recipe Instructions */}
        {instructions && (
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <DisplayRecipeInstructions instructions={instructions} fermentationHours={fermentationHours} yeastType={yeastType} />
          </div>
        )}

        {/* Fermentation Times Modal */}
        {yeast && (
          <FermentationTimesModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            yeast={yeast}
            yeastType={yeastType}
            fermentationHours={fermentationHours}
            onFermentationHoursChange={setFermentationHours}
          />
        )}

        {/* Footer */}
        <Footer />
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
