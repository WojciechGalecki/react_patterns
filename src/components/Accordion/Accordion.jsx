import { useContext, useState } from "react";
import { createContext } from "react";
import AccordionItem from "./AccordionItem";
import AccordionContent from "./AccordionContent";
import AccordionTitle from "./AccordionTitle";

const AccordionContext = createContext();

export function useAccordionContext() {
  const ctx = useContext(AccordionContext);

  if (!ctx) {
    throw new Error(
      "Accordion-releted components must be wrapped by <Accordion>"
    );
  }

  return ctx;
}

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState();

  function toggleItem(id) {
    setOpenItemId((prevId) => (prevId === id ? null : id));
  }

  const ctxValue = {
    openItemId,
    toggleItem,
  };

  return (
    <AccordionContext.Provider value={ctxValue}>
      <ul className={className}>{children}</ul>
    </AccordionContext.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
