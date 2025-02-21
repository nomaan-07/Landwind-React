import Icon from "../../../ui/Icon";

function AccordionQuestion({ question, current, onToggle }) {
  const isOpen = current === question.id;

  return (
    <div className="border-b border-b-gray-200">
      {/* Question */}
      <div
        className={`flex cursor-pointer items-center justify-between gap-3 py-4 md:py-6 ${isOpen ? "text-gray-900" : "text-gray-500"}`}
        onClick={() => onToggle(question.id)}
      >
        <h4 className="font-medium leading-none transition-all md:text-lg">
          {question.title}
        </h4>
        <Icon
          className={`size-4 shrink-0 transition-all ${isOpen ? "rotate-180" : ""}`}
          icon="chevron-down"
        />
      </div>
      {/* Answer */}
      <div
        className={`space-y-1.5 overflow-hidden text-gray-500 transition-all md:pr-10 ${isOpen ? "h-auto border-t border-t-gray-200 py-3 md:py-5" : "max-h-0"}`}
      >
        {question.answers.map((answer, i) => (
          <p key={i}>{answer}</p>
        ))}
        <p>
          Find out more information by{" "}
          <a
            href={question.url}
            className="font-medium text-purple-600 transition-colors hover:text-purple-700"
          >
            reading the license
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default AccordionQuestion;
