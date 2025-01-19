"use client"

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"



export function NavUser() {

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <Avatar className="h-8 w-8 rounded-full">
            <AvatarImage src={'https://xclbyllpejfphiformqq.supabase.co/storage/v1/object/sign/portfolio_storage_bucket/portfolio%20images/profileimage.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwb3J0Zm9saW9fc3RvcmFnZV9idWNrZXQvcG9ydGZvbGlvIGltYWdlcy9wcm9maWxlaW1hZ2UuanBnIiwiaWF0IjoxNzM3Mjc1MDMwLCJleHAiOjIwNTI2MzUwMzB9.Wuu4-hOxr7mUO839_9h9v3arNsEY3FAxVEJo_2l08eQ&t=2025-01-19T08%3A23%3A50.741Z'} alt={"DK"} />
            <AvatarFallback className="rounded-full">DK</AvatarFallback>
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold">Debojeet Karmakar</span>
            <span className="truncate text-xs"> Designer | Developer</span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  )

}
