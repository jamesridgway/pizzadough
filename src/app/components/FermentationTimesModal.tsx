import { Modal } from "./Modal";
import { YeastEntry } from "../data";
import { Yeast } from "../recipe_generator";

interface FermentationTimesModalProps {
  isOpen: boolean;
  onClose: () => void;
  yeast: YeastEntry;
  yeastType: Yeast;
  fermentationHours: number;
  onFermentationHoursChange: (hours: number) => void;
}

export function FermentationTimesModal({
  isOpen,
  onClose,
  yeast,
  yeastType,
  fermentationHours,
  onFermentationHoursChange,
}: FermentationTimesModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Available Fermentation Times"
    >
      <div className="space-y-3">
        <p className="text-sm text-gray-600 mb-4">
          Select from the available fermentation times based on your temperature and yeast type.
        </p>
        {yeast.fermentation_hours
          .sort((a, b) => b.hours - a.hours)
          .map((x, index) => {
            const yeastPercentage = yeastType === 'ADY' ? x.ady * 100 : 
                                   yeastType === 'IDY' ? x.idy * 100 : 
                                   x.cy * 100;
            const isSelected = x.hours === fermentationHours;
            return (
              <button
                key={index}
                onClick={() => {
                  onFermentationHoursChange(x.hours);
                  onClose();
                }}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors cursor-pointer ${
                  isSelected ? 'bg-orange-100 border border-orange-300' : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                <span className={`text-sm font-medium ${
                  isSelected ? 'text-orange-700' : 'text-gray-700'
                }`}>
                  {x.hours} hours
                </span>
                <span className={`text-xs ${
                  isSelected ? 'text-orange-600' : 'text-gray-500'
                }`}>
                  {yeastPercentage.toFixed(2)}% yeast
                </span>
              </button>
            );
          })}
      </div>
    </Modal>
  );
} 