import { ReceiptInstructions } from "../recipe_generator";
import { ChefHat, Scale, Clock, Wheat, Droplets, Sprout, CircleDot } from "lucide-react";
import StepList from "./StepList";
import IngredientCard from "./IngredientCard";

type Props = {
  instructions: ReceiptInstructions | undefined;
  fermentationHours: number;
}

export default function DisplayRecipeInstructions(props: Props) {
  if (!props.instructions) {
    return <></>;
  }

  return (
    <div>
      <div className="flex items-center mb-6">
        <ChefHat className="h-6 w-6 text-green-600 mr-2" />
        <h2 className="text-2xl font-semibold text-gray-900">Recipe & Instructions</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Ingredients */}
        <div className="bg-gray-50 rounded-lg p-4 md:col-span-1">
          <div className="flex items-center mb-4">
            <Scale className="h-5 w-5 text-blue-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">Ingredients</h3>
          </div>
          <div className="space-y-3">
            <IngredientCard
              icon={Wheat}
              iconColor="text-amber-600"
              name="Flour"
              value={`${props.instructions.flour}g`}
            />
            <IngredientCard
              icon={Droplets}
              iconColor="text-blue-600"
              name="Water"
              value={`${props.instructions.water}ml`}
            />
            <IngredientCard
              icon={Sprout}
              iconColor="text-green-600"
              name="Yeast"
              value={`${props.instructions.yeast}g`}
            />
            <IngredientCard
              icon={CircleDot}
              iconColor="text-gray-600"
              name="Salt"
              value={`${props.instructions.salt}g`}
            />
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-gray-50 rounded-lg p-4 md:col-span-3">
          <div className="flex items-center mb-4">
            <Clock className="h-5 w-5 text-orange-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">Instructions</h3>
          </div>
          <p className="mb-4">This recipe is designed to be made by hand using a dough tray.</p>
          <StepList
            steps={[
              {
                number: 1,
                title: "Disolve yeast",
                description: `Add ~75% of the water (${Math.round(props.instructions.water * 0.75)}ml) to your dough tray and mix in your yeast.`
              },
              {
                number: 2,
                title: "Add flour",
                description: "Add all of the flour to your water and dough mixture."
              },
              {
                number: 3,
                title: "Combine ingredients",
                description: "Mix the ingredients together, then add the salt before adding the remaining water."
              },
              {
                number: 4,
                title: "Knead dough",
                description: "Once the dough has come together, empty it onto a work surface and knead until the dough reaches a temperature of 23-24°C. Use an instant read thermometer to check the temperature."
              },
              {
                number: 5,
                title: "Relax",
                description: "Place the dough back in the dough tray with the lid on and allow the dough to relax for 10 minutes."
              },
              {
                number: 6,
                title: "Shape and rest",
                description: "Shape the dough into one large ball and leave to rest for an hour in the dough tray with the lid on."
              },
              {
                number: 7,
                title: "Form into balls",
                description: "Shape the dough into 270 gram balls and place them back into the dough tray, evenly spaced with the lid on."
              },
              {
                number: 8,
                title: "Prove",
                description: `Leave the dough to prove for ${props.fermentationHours} hours.`
              }
            ]}
          />
          <p className="mt-4">
            <small>
            This recipe calculator is based on the <a href="https://www.youtube.com/watch?v=cM9elo7qtp8" target="_blank" 
            className="text-orange-600 hover:text-orange-700 underline">Neapolitan Pizza recipe by Adam Atkins</a> which you can find on his <a href="https://www.youtube.com/@peddlingpizza" target="_blank" className="text-orange-600 hover:text-orange-700 underline">@peddlingpizza</a> YouTube channel.
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
