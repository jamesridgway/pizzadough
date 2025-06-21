import { ReceiptInstructions } from "../recipe_generator";
import { ChefHat, Scale, Clock, Wheat, Droplets, Sprout, CircleDot } from "lucide-react";
import StepList from "./StepList";
import IngredientCard from "./IngredientCard";

type Props = {
  instructions: ReceiptInstructions | undefined
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
          <StepList
            steps={[
              {
                number: 1,
                title: "Mix Dry Ingredients",
                description: "Mix flour and salt in a large bowl"
              },
              {
                number: 2,
                title: "Prepare Yeast",
                description: "Dissolve yeast in warm water"
              },
              {
                number: 3,
                title: "Combine Ingredients",
                description: "Gradually add water to flour mixture"
              },
              {
                number: 4,
                title: "Knead Dough",
                description: "Knead until smooth and elastic"
              },
              {
                number: 5,
                title: "First Rise",
                description: "Let rise according to fermentation times"
              },
              {
                number: 6,
                title: "Divide Dough",
                description: "Divide into equal portions"
              },
              {
                number: 7,
                title: "Shape and Rest",
                description: "Shape into balls and let rest"
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
