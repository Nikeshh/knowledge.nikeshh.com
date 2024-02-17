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
import Knowledge from '@/components/knowledge'

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
      <Tabs defaultValue="saas" className="w-full container hidden lg:inline-block">
        <TabsList className='flex justify-center'>
          <TabsTrigger value="saas">SAAS</TabsTrigger>
          <TabsTrigger value="fullstackdevelopment">Full Stack Development</TabsTrigger>
        </TabsList>
        <TabsContent value="saas">
          <Knowledge />
        </TabsContent>
        <TabsContent value="fullstackdevelopment">
          <Knowledge />
        </TabsContent>
      </Tabs>
      <Accordion type="single" collapsible className="container w-full inline-block lg:hidden">
          <AccordionItem value="item-1">
            <AccordionTrigger>SAAS</AccordionTrigger>
            <AccordionContent>
              <Knowledge />
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Full Stack Development</AccordionTrigger>
            <AccordionContent>
              <Knowledge />
            </AccordionContent>
          </AccordionItem>
      </Accordion>
    </div>
  );
}
