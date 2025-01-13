import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";

export default function AccordionTitle({ children, className }) {
  const id = useAccordionItemContext();
  
  const { toggleItem } = useAccordionContext();

  return (
    <h3 className={className} onClick={() => toggleItem(id)}>
      {children}
    </h3>
  );
}
