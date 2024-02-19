import { ExclamationTriangleIcon } from '@heroicons/react/20/solid'

type AlertAction = {
    label: string;
    onClick: () => void;
  };
  
  type AlertProps = {
    title: string;
    description: string;
    action?: AlertAction;
    bgcolor?: string;
    textcolor?: string;
  };
  
  export default function Alert({
    title,
    description,
    action,
    textcolor,
  
  }: AlertProps) {
    const textColor = `${textcolor}`;
    

  
    return (
      <div className={`rounded-md bg-teal-400 p-4`}>
        <div className="flex">
          <div className="flex-shrink-0">
            <ExclamationTriangleIcon className={`h-5 w-5 text-${textcolor}`} aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className={`text-sm font-medium text-${textColor}`}>{title}</h3>
            <div className={`mt-2 text-bold text-sm text-${textColor}`}>
              <p>
                {description}
              </p>
            </div>
            {action && (
              <div className="mt-2">
                <button 
                  onClick={action.onClick} 
                  className={`text-sm font-medium text-${textColor}`}
                >
                  {action.label}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
  