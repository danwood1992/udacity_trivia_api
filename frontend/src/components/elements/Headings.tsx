import React from 'react';
import clsx from 'clsx';

interface HeadingProps {
    text: string;
    className?: string;
    fontsize?: string;
}



export function PageHeading({
    className,
    text,
    ...props
  }: HeadingProps) {
    return (
      <div 
        className={clsx(`h1`,className)}
        {...props}>{text}</div>   
    );
  }

export function SectionHeading({
    className,
    text,
    ...props
  }: HeadingProps) {
    return (
        <div 
        className={clsx(`h2`,className)}
        {...props}>{text}</div>
    );
  }

export function BlockHeading({
    className,
    text,
    ...props
  }: HeadingProps) {
    return (
        <div 
        className={clsx(`h3`,className)}
        {...props}>{text}</div>   
    );
  }

  