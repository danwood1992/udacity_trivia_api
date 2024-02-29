interface IndexFooterProps {
    section_id: string;
    quizData: any;
}


export default function IndexFooter({ quizData, section_id }: IndexFooterProps) {
  return (
    
      <div className="bg-dark-blue items-center bottom-0 inset-x-0 text-white">
        <div className="mx-auto min-h-80 max-w-7xl px-6 py-12 flex justify-center items-center">
          <div className="text-center w-full"> {/* Adjusted here */}
          Copyright &copy; {new Date().getFullYear()} udacitrivia. All rights <a className='text-white' href="https://github.com/danwood1992"> Dan Wood</a>
          </div>
        </div>
      </div>
    
  );
};
