'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function Experience() {
  return (
    <div>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Nocage</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>Palisadoes foundation</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>S.W.O.S</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-O4">
          <AccordionTrigger>100Xdevs</AccordionTrigger>
          <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
