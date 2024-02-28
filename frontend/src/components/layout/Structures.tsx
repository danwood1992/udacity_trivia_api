
import React from 'react';
import clsx from 'clsx';

interface ContainerProps extends React.ComponentPropsWithoutRef<'div'>{
  width?: string; 
}

export function Container({
  className,
  width = '7',
  ...props
}: ContainerProps) {
  return (
    <div 
      className={clsx(`flex mx-auto max-w-${width}xl px-4 sm:px-6 lg:px-8`,className)}
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

export function Section({
    className,
    ...props
    }: React.ComponentPropsWithoutRef<'div'>) {
    return (
        <section
        className={clsx('', className)}
        {...props}
        />
    )
    }

export function PageWrapper({
    className,
    ...props
    }: React.ComponentPropsWithoutRef<'div'>) {
    return (
        <div
        className={clsx('', className)}
        {...props}
        />
    )
    }

















  
  
