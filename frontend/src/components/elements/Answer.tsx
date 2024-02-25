import clsx from 'clsx'; // Ensure clsx is imported

interface AnswerProps extends React.ComponentPropsWithoutRef<'div'> {
    answer: string;
    clicked: boolean;
    correct: boolean;
}

export default function Answer({
  className,
  answer,
  clicked,
  correct,
  ...props
}: AnswerProps) {
    const containerClasses = clsx(
      'm-2 text-center text-3xl p-6 mx-8 rounded border hover:shadow hover:opacity-100 font-bold capitalize',
      {
        'bg-green text-white shadow': clicked && correct, // If clicked and correct, add green background
        'bg-red-500 text-white shadow': clicked && !correct, // If clicked and not correct, add red background
        'bg-dark-blue text-white shadow': !clicked, // Default to dark blue if not clicked
      },
      className // Include any additional classes passed through props
    );
  
    return (
      <div 
        className={containerClasses}
        {...props}
      >
        {answer} {/* Ensure the answer is displayed within the div */}
      </div>
    );
}




