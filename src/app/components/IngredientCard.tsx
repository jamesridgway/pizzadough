import { LucideIcon } from "lucide-react";

interface IngredientCardProps {
  icon: LucideIcon;
  iconColor: string;
  name: string;
  value: string;
}

export default function IngredientCard({ icon: Icon, iconColor, name, value }: IngredientCardProps) {
  return (
    <div className="p-3 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-2">
        <Icon className={`h-4 w-4 ${iconColor} mr-2`} />
        <span className="text-gray-700 font-medium">{name}</span>
      </div>
      <div className="ml-6">
        <span className="font-semibold text-gray-900">{value}</span>
      </div>
    </div>
  );
} 