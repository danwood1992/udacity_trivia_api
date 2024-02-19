interface CheckBoxGroupProps {
  label: string;
  paragraph: string;
  groupName: string;
  options: { id: string; title: string }[];

}

const CheckBoxGroup: React.FC<CheckBoxGroupProps> = ({ groupName, options,label,paragraph }) => {
  return (
    <div>
      <label className="text-base font-semibold text-woodcote-darker-sand">{label}</label>
      <p className="text-sm text-woodcote-darker-sand">{paragraph}</p>
      <fieldset className="mt-4">
        <legend className="sr-only">Checkbox method</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-x-10 sm:space-y-0">
          {options.map((option) => (
            <div key={option.id} className="flex items-center">
              <input
                id={option.id}
                name={`${groupName}[${option.id}]`}
                type="checkbox"

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

export default CheckBoxGroup;