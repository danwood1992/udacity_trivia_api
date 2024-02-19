
interface DescriptionInputProps {
    id: string;
    label: string;
  }
  
const DescriptionInput: React.FC<DescriptionInputProps> = ({ id, label }) => {
    return (
    <div className="sm:col-span-2" >

        <label htmlFor={id} className="block text-sm font-semibold leading-6 text-woodcote-dusty-cedar ">
          {label}
        </label>

        <div className="mt-2.5">
            <textarea
            name={id}
            id={id}
            rows={2}
            className="block w-full rounded-md border-0 px-3.5 py-2 text-woodcote-dark-blue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-woodcote-blue focus:ring-2 focus:ring-inset focus:ring-woodcote-dusty-cedar sm:text-sm sm:leading-6"
            defaultValue={'Huge pallet'}
            />
        </div>

      </div>
    );
  };
  
  export default DescriptionInput;


