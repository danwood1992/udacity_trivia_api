import clsx from 'clsx'

interface FlexContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  items?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
  justify?: 'start' | 'center' | 'end' | 'stretch';
}



export function Container({
  className,

  items = 'center',
  justify = 'center', 
  ...props
}: FlexContainerProps) {

  const itemsClass = items ? `items-${items}` : '';
  const justifyClass = justify ? `justify-items-${justify}` : '';

  return (
    <div 
      className={clsx('flex', itemsClass, justifyClass, className)}
      {...props}
    />
  );
}


export function Hero({
    className,
    ...props
    }: React.ComponentPropsWithoutRef<'div'>) {
    return (
        <div
        className={clsx('min-h-screen mx-auto px-4 py-8', className)}
        {...props}
        />
    )
    }

export function Wrapper({
    className,
    ...props
    }: React.ComponentPropsWithoutRef<'div'>) {
    return (
        <div
        className={clsx('mx-auto px-4', className)}
        {...props}
        />
    )
    }
















  
  
