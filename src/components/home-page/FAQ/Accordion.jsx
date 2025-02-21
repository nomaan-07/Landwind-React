import { useCallback, useState } from "react";

import AccordionQuestion from "./AccordionQuestion";

const questions = [
  {
    id: 1,
    title: "Can I use FlowBite in open-source projects?",
    answers: [
      "Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.",
      "With that being said, feel free to use this design kit for your open-source projects.",
    ],
    url: "#",
  },
  {
    id: 2,
    title: "Where can I access my download files?",
    answers: [
      "Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.",
      "With that being said, feel free to use this design kit for your open-source projects.",
    ],
    url: "#",
  },
  {
    id: 3,
    title: "Can I use FlowBite for commercial purposes?",
    answers: [
      "Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.",
      "With that being said, feel free to use this design kit for your open-source projects.",
    ],
    url: "#",
  },
  {
    id: 4,
    title: "What about browser support?",
    answers: [
      "Generally, it is accepted to use FlowBite in open-source projects, as long as it is not a UI library, a theme, a template, a page-builder that would be considered as an alternative to FlowBite itself.",
      "With that being said, feel free to use this design kit for your open-source projects.",
    ],
    url: "#",
  },
];
function Accordion() {
  const [current, setCurrent] = useState(null);

  const handleToggle = useCallback((id) => {
    setCurrent((prev) => (prev === id ? null : id));
  }, []);

  return (
    <div className="mx-auto mt-6 max-w-[695px] md:mt-8">
      {questions.map((question) => (
        <AccordionQuestion
          key={question.id}
          question={question}
          current={current}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
}

export default Accordion;
