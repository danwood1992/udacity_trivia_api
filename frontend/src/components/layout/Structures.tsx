
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
        className={clsx('section', className)}
        {...props}
        />
    )
    }

export function Page({
    className,
    ...props
    }: React.ComponentPropsWithoutRef<'div'>) {
    return (
        <div
        className={clsx('page', className)}
        {...props}
        />
    )
    }

export function Row(
    {
        classsName,
        ...props
    }: React.ComponentPropsWithoutRef<'div'>
) {
    return (
        <div
        className={clsx('flex-row', className)}
        {...props}
        />
    )
}


export function Column(
    {
        className,
        ...props
    }: React.ComponentPropsWithoutRef<'div'>
) {
    return (
        <div
        className={clsx('flex-col', className)}
        {...props}
        />
    )
}















  
  
