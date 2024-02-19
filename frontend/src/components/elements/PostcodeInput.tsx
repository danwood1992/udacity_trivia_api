interface PostcodeProps {
  id: string;
  label: string;
}

const Postcode: React.FC<PostcodeProps> = ({ id, label }) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold leading-6 text-woodcote-dusty-cedar ">
        {label}
      </label>
      <div className="mt-2.5">
        <input
          type="text" // Changed from 'postcode' to 'text' as 'postcode' is not a valid input type
          name={id}
          id={id}
          autoComplete="off" // Changed from 'postcode' to 'off' to disable autocomplete
          className="block w-full rounded-md border-0 px-3.5 py-2 text-woodcote-dark-blue shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-woodcote-sand focus:ring-2 focus:ring-inset focus:ring-woodcote-dusty-cedar sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};

export default Postcode;
