interface RadioGroupProps {
  label: string;
  paragraph: string;
  groupName: string;
  options: { id: string; title: string }[];
  defaultOption?: string;
}

const RadioGroup: React.FC<RadioGroupProps> = ({ groupName, options, defaultOption,label,paragraph }) => {
  return (
    <div>
      <label className="text-base font-semibold text-woodcote-darker-sand">{label}</label>
      <p className="text-sm text-woodcote-darker-sand">{paragraph}</p>
      <fieldset className="mt-4">
        <legend className="sr-only">Radio method</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {options.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                id={option.id}
                name={groupName}
                type="radio"
                defaultChecked={option.id === defaultOption}
                className="h-4 w-4 border-woodcote-darker-sand text-woodcote-dusty-cedar focus:ring-woodcote-darker-sand"
              />
              <label htmlFor={option.id} className="ml-3 block text-sm font-medium leading-6 text-woodcote-darker-sand">
                {option.title}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
};

export default RadioGroup;