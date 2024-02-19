
interface PhoneInputProps {
    id: string
    label: string
}



const PhoneInput: React.FC<PhoneInputProps> =({id,label}) => {

    return(

        <div>
            <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-woodcote-dusty-cedar">
            {label}
            </label>
            <div className="mt-2.5">
                <input
                    type="tel"
                    name={id}
                    id={id}
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-woodcote-dusty-cedar shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-woodcote-sand focus:ring-2 focus:ring-inset focus:ring-woodcote-dusty-cedar sm:text-sm sm:leading-6"
                />
            </div>
        </div>


    );

};



export default PhoneInput;