import { ReceiptInstructions } from "../recipe_generator";
import { ChefHat, Scale, Clock } from "lucide-react";

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
            <div className="flex justify-between items-center p-2 bg-white rounded border">
              <span className="text-gray-700">Flour</span>
              <span className="font-semibold text-gray-900">{props.instructions.flour}g</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-white rounded border">
              <span className="text-gray-700">Water</span>
              <span className="font-semibold text-gray-900">{props.instructions.water}ml</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-white rounded border">
              <span className="text-gray-700">Yeast</span>
              <span className="font-semibold text-gray-900">{props.instructions.yeast}g</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-white rounded border">
              <span className="text-gray-700">Salt</span>
              <span className="font-semibold text-gray-900">{props.instructions.salt}g</span>
            </div>
          </div>
        </div>

        {/* Instructions */}
        <div className="bg-gray-50 rounded-lg p-4 md:col-span-3">
          <div className="flex items-center mb-4">
            <Clock className="h-5 w-5 text-orange-600 mr-2" />
            <h3 className="text-lg font-medium text-gray-900">Instructions</h3>
          </div>
          <div className="space-y-3 text-sm text-gray-700">
            <p>1. Mix flour and salt in a large bowl</p>
            <p>2. Dissolve yeast in warm water</p>
            <p>3. Gradually add water to flour mixture</p>
            <p>4. Knead until smooth and elastic</p>
            <p>5. Let rise according to fermentation times</p>
            <p>6. Divide into equal portions</p>
            <p>7. Shape into balls and let rest</p>
          </div>
        </div>
      </div>
    </div>
  );
}
