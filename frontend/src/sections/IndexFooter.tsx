interface IndexFooterProps {
    section_id: string;
    quizData: any;
}


export default function IndexFooter({ quizData, section_id }: IndexFooterProps) {
  return (
    <div>
      <footer className="bg-dark-blue items-center">
        <div className="mx-auto min-h-80 max-w-7xl px-6 py-12 flex justify-center items-center"> {/* Adjusted here */}
          <div className="text-center w-full"> {/* Adjusted here */}
            &copy; 2024 <a className='text-white' href="https://github.com/danwood1992"> Dan Wood</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
