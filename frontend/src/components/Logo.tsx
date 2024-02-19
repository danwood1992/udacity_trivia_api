import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className='roundedoverflow-hidden w-10 h-10 py-2'>
      <Image 
        
        alt="woodcote logo" 
        src="images/delivery-van-yellow.svg" 
        width={90} 
        height={90}
      />
    </div>
  );
}

export function MediumLogo({ className }: LogoProps) {
  return (
    <div className='w-24 h-24 mt-10'>
      <Image 
        
        alt="woodcote logo" 
        src="images/delivery-van-yellow-medium.svg" 
        width={190} 
        height={190}
      />
    </div>
  );
}
