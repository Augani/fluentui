import * as React from 'react';
import { AccordionItem, AccordionHeader, AccordionPanel, Accordion } from '@fluentui/react-accordion';

export const AccordionItemExample = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Accordion>
      <AccordionItem open={open} onToggle={(ev, value) => setOpen(value)}>
        <AccordionHeader>Accordion Header</AccordionHeader>
        <AccordionPanel>Accordion Panel</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
