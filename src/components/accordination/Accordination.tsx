import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Plus, Minus } from "lucide-react"; 
import Typography from "../typography/Typography";

interface AccordionItemData {
  value: string;
  title: string;
  content: React.ReactNode[];
}

interface ReusableAccordionProps {
  items: AccordionItemData[];
  defaultValue?: string;
  type?: "single" | "multiple";
  collapsible?: boolean;
}

export function ReusableAccordion({
  items,
  defaultValue,
  type = "single",
  collapsible = true,
}: ReusableAccordionProps) {
  return (
    <Accordion
      type={type}
      collapsible={collapsible}
      className="w-full"
      defaultValue={defaultValue}
    >
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value}  className="border-none" >
          <AccordionTrigger className="flex items-center justify-between space-y-5">
            <span className="flex items-center gap-2 ">
              {/* Icon wrapper that switches based on accordion state */}
              <span className="transition-transform duration-200">
                <Plus className="h-5 w-5 data-[state=open]:hidden" />
                <Minus className="h-5 w-5 hidden data-[state=open]:block" />
              </span>
            <Typography.H3 className="!font-normal ">  {item.title}</Typography.H3>
          
            </span>
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance ">
            {item.content.map((paragraph, idx) => (
              <Typography.B2R1 key={idx}>{paragraph}</Typography.B2R1>
              // <div key={idx}>{paragraph}</div>
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
