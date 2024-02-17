'use client'

import React, { useEffect } from 'react'
import { toast } from "sonner"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

export default function Home() {
  useEffect(() => {
    toast("New Project has been added", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "View",
        onClick: () => console.log("Undo"),
      },
    })
  }, []);

  return (
    <div className='flex justify-center h-screen w-full mt-20'>
      <Tabs defaultValue="saas" className="hidden lg:inline-block">
        <TabsList>
          <TabsTrigger value="saas">SAAS</TabsTrigger>
          <TabsTrigger value="fullstackdevelopment">Full Stack Development</TabsTrigger>
        </TabsList>
        <TabsContent value="saas">
          SAAS
        </TabsContent>
        <TabsContent value="fullstackdevelopment">
          Full Stack Development
        </TabsContent>
    </Tabs>
    <Accordion type="single" collapsible className="container w-full inline-block lg:hidden">
        <AccordionItem value="item-1">
          <AccordionTrigger>SAAS</AccordionTrigger>
          <AccordionContent>
            SAAS
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Full Stack Development</AccordionTrigger>
          <AccordionContent>
            Full Stack Development
          </AccordionContent>
        </AccordionItem>
    </Accordion>
    </div>
  );
}
