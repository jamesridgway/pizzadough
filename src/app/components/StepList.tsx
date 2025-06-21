type Step = {
  number: number;
  title: string;
  description: string;
};

type StepListProps = {
  steps: Step[];
};

export default function StepList({ steps }: StepListProps) {
  return (
    <div className="space-y-4">
      {steps.map((step) => (
        <div key={step.number} className="flex items-start space-x-3">
          <div className="bg-orange-100 text-orange-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
            {step.number}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">{step.title}</h3>
            <p className="text-gray-600">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
} 