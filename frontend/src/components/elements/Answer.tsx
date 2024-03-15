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
        'm-2 text-center text-2xl md:text-3xl p-2 mx-2 border-dark-blue border-8 rounded-xl hover:text-white md:mx-4 md:p-6 hover:bg-red-500 font-bold capitalize',
        {
            'bg-white text-dark-blue shadow': !clicked ,
            'bg-red-500 text-white shadow border-red-500': clicked,
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
  




