"use client"

import * as React from "react"
import {
  PieChart,
  User,
  Code,
  Briefcase,
  Instagram,
  Linkedin,
  LineChart,
  FileText,
  LayoutDashboard,
  Handshake
} from "lucide-react"
import { FaXTwitter } from "react-icons/fa6";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarRail,
} from "@/components/ui/sidebar"
import { NavMain } from "../../components/sidebar/sideCollapsibleNavMenu"
import { NavUser } from "../../components/sidebar/sideUserMenu"
import { usePathname } from "next/navigation"



export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname()

  const navigationData = {
    portfolio: [
      {
        type: "normal" as const,
        title: "Explore",
        url: "/",
        icon: LayoutDashboard,
        isActive: true,
        isFocused: pathname.split("/").pop() === "",
      },
      {
        type: "normal" as const,
        title: "About Me",
        url: "/aboutme",
        icon: User,
        isFocused: pathname.split("/").pop() === "aboutme",
      },
      {
        type: "normal" as const,
        title: "Projects",
        url: "/projects",
        icon: PieChart,
        isFocused: pathname.split("/").pop() === "projects",
      },
      {
        type: "dropdown" as const,
        title: "Experience",
        url: "/experience",
        icon: Briefcase,
        isActive: true,
        items: [
          {
            title: "Academic",
            url: "/experience/academic",
            isFocused: pathname.split("/").pop() === "academic",
          },
          {
            title: "Work",
            url: "/experience/work",
            isFocused: pathname.split("/").pop() === "work",
          },
          {
            title: "Travel",
            url: "/experience/travel",
            isFocused: pathname.split("/").pop() === "travel",
          },
        ],
      },
    ],
    resources: [
      {
        type: "normal" as const,
        title: "Blogs",
        url: "/blogs",
        icon: FileText,
        isFocused: pathname.split("/").pop() === "blogs",
      },
      {
        type: "normal" as const,
        title: "Stack",
        url: "/stack",
        icon: Code,
        isFocused: pathname.split("/").pop() === "skills",
      },
      {
        type: "normal" as const,
        title: "Learning Curve",
        url: "/learningcurve",
        icon: LineChart,
        isFocused: pathname.split("/").pop() === "learningcurve",
      },
    ],
    contact: [
      {
        type: "normal" as const,
        title: "Contact",
        url: "/contact",
        icon: Handshake,
        isActive: true,
        isFocused: pathname.split("/").pop() === "contact",
        social: false
      },
      {
        type: "normal" as const,
        title: "Instagram",
        url: "/instagram",
        icon: Instagram,
        isActive: true,
        isFocused: pathname.split("/").pop() === "instagram",
        social: true
      },
      {
        type: "normal" as const,
        title: "LinkedIn",
        url: "/linkedin",
        icon: Linkedin,
        isActive: true,
        isFocused: pathname.split("/").pop() === "linkedin",
        social: true
      },
      {
        type: "normal" as const,
        title: "Twitter",
        url: "/twitter",
        icon: FaXTwitter,
        isActive: true,
        isFocused: pathname.split("/").pop() === "twitter",
        social: true
      },
    ]
  }


  return (
    <Sidebar collapsible="icon" {...props} >
      <SidebarHeader>
        <SidebarMenu>
          <NavUser/>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
          <NavMain items={navigationData.portfolio}   itemsCategory="Portfolio" />
          <NavMain items={navigationData.resources}   itemsCategory="Resources" />
          <NavMain items={navigationData.contact}     itemsCategory="Contact Me" />
      </SidebarContent>
        <SidebarFooter>
          {/* <NavUser/> */}
        </SidebarFooter>
      <SidebarRail />
    </Sidebar>  
  )
}
