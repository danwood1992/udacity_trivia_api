import clsx from 'clsx'; 

interface AnswerProps extends React.ComponentPropsWithoutRef<'div'> {
    answer: string;
    clicked: boolean;
}

export default function Answer(
  {
    className,
    answer,
    clicked,
    ...props
  }: AnswerProps) {

      const containerClasses = clsx(
        'm-2 text-center text-3xl p-6 mx-8 border border-8 rounded-xl hover:shadow hover:opacity-100 font-bold capitalize',
        {
            'bg-white text-dark-blue shadow': !clicked ,
            'bg-dark-blue text-white shadow border-red-500 border': clicked,
        },
        className
      );
  
      return (
        <div 
          className={containerClasses}
          {...props}
        >
          {answer}
        </div>
      );
  }
  




