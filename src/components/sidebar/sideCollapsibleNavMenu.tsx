"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"
import { IconType } from "react-icons";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"
import { PiShareDuotone } from "react-icons/pi";
import Link from "next/link";


export function NavMain({
  items, itemsCategory, className
}: {
  itemsCategory?: string
  className?: string
  items: {
    type: "normal" | "dropdown"
    title: string
    url: string
    icon?: LucideIcon | IconType
    isActive?: boolean
    isFocused?: boolean
    social?: boolean
    items?: {
      title: string
      url: string
      isFocused: boolean
    }[]
  }[]
}) {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{itemsCategory}</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          item.type === "normal" ? (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton 
                asChild 
                tooltip={item.title} 
                className={cn(
                  className,
                  item.isFocused && "bg-accent/70"
                )}
              >
                {!item.social ? (
                  <Link href={item.url}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                  </Link>
                ) : (
                    <Link href={item.url} target={(item.title === "Instagram" || item.title === "LinkedIn" || item.title === "Twitter") ? "_blank" : undefined}>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center gap-2">
                      {item.icon && <item.icon size={16} />}
                      <span>{item.title}</span>
                      </div>
                      <div className="flex items-center gap-2">
                      <PiShareDuotone />
                      </div>
                    </div>
                    </Link>
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ) : (
            <Collapsible
              key={item.title}
              asChild
              defaultOpen={item.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {item.icon && <item.icon />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton 
                          asChild
                          className={cn(
                            className,
                            subItem.isFocused && "bg-accent/70"
                          )}
                        >
                          <Link href={subItem.url}>
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          )
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
