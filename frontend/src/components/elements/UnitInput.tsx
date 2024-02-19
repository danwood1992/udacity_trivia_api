interface UnitInputProps {
    id: string;
    label: string;
    unit: string;
  }
  
  const UnitInput: React.FC<UnitInputProps> = ({ id, label, unit }) => {
    return (
      <div>

        <label htmlFor={id} className="block text-sm font-semibold leading-6 text-woodcote-dusty-cedar ">
          {label}
        </label>
        <div className="mt-2.5">
          <input
            type="number"
            name={id}
            id={id}
            autoComplete="off" 
            className="block w-full rounded-md border-0 px-3.5 py-2 text-woodcote-dark-blue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-woodcote-sand focus:ring-2 focus:ring-inset focus:ring-woodcote-dusty-cedar sm:text-sm sm:leading-6"
          />
           <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          {unit}
        </div>
        </div>

      </div>
    );
  };
  
  export default UnitInput;