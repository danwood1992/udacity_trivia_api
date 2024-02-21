import clsx from 'clsx'

interface FlexContainerProps extends React.ComponentPropsWithoutRef<'div'> {
  items?: 'start' | 'center' | 'end';
  justify?: 'start' | 'center' | 'end';
}

export function ResponsiveContainer({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-4 sm:px-6 lg:px-8', className)}
      {...props}
    />
  )
}

export function FlexContainer({
  className,
  items = 'center',
  justify = 'center', 
  ...props
}: FlexContainerProps) {

  const itemsClass = items ? `items-${items}` : '';
  const justifyClass = justify ? `justify-${justify}` : '';

  return (
    <div
      className={clsx('flex', itemsClass, justifyClass, className)}
      {...props}
    />
  );
}


export function Section({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'section'>) {
  return (
    <section
      className={clsx('max-w-5xl mx-auto px-4 py-12 md:py-10 sm:py-8 sm:px-6', className)}
      {...props}
    />
  )
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
















  
  
