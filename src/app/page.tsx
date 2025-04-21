"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ReceiptInstructions, RecipeGenerator, Yeast } from "./recipe_generator";
import DisplayRecipeInstructions from "./components/DisplayRecipeInstructions";
import { getFermentationHours } from "./fermentation";
import { YeastEntry } from "./data";

export default function Home() {
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
    <div>
      <main>
        <h2>Dough Requirements</h2>
        <p>
          I want to make <input type="number" min="1" step="1" defaultValue={balls} onChange={e => setBalls(e.target.value)} style={{width: 45}} /> 270-gram dough balls.
        </p>
        <p>
          I am using &nbsp;
          <select defaultValue={yeastType}  onChange={e => setYeastType(e.target.value)}>
            <option>ADY</option>
            <option>IDY</option>
            <option>CY</option>
          </select>
          &nbsp; yeast.
        </p>
        <p>
          I want a dough hydration of <input type="number" min="0" max="99" step="0.5" defaultValue={hydration} onChange={e => setHydration(e.target.value)} style={{width: 45}} />&nbsp;%.
        </p>
        <h2>Fermentation</h2>
        <p>
          My dough will prove at a temperature of <input type="number" min="0" step="0.1" defaultValue={temp} onChange={e => setTemp(e.target.value)} style={{width: 45}} />&nbsp;&deg;C.
        </p>
        <ul>
          {yeast?.fermentation_hours.sort((a, b) => b.hours - a.hours).map(x => <li key={JSON.stringify(x)}>{x.hours}</li>)}
        </ul>
        {instructions && <DisplayRecipeInstructions instructions={instructions} />}
      </main>
    </div>
  );
}
