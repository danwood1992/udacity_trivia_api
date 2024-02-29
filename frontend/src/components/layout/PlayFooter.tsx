import FeedbackSection from "@/sections/FeedbackSection";

interface PlayFooterProps {
    section_id: string;
    quizData: any;
}


export default function PlayFooter({ quizData, section_id }: PlayFooterProps) {
  return (
 
    <footer className="bg-dark-blue text-white inset-x-0 bottom-0">
      <div className="mx-auto max-w-7xl px-6 py-4 text-center">
        <FeedbackSection quizData={quizData} section_id={'feedback'} />
        &copy; 2024 <a href="https://github.com/danwood1992"> Dan Wood</a>
      </div>
    </footer>
 
  );
};


