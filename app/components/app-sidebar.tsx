"use client";

import {
  Calendar,
  Component,
  GripVertical,
  Home,
  Inbox,
  Package,
  RefreshCcw,
  Search,
  Settings,
  Trash,
} from "lucide-react";

import { ToggleGroup } from "@radix-ui/react-toggle-group";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@ui/sidebar";
import { ToggleGroupItem } from "@ui/toggle-group";
import Image from "next/image";
import React from "react";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";

const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

export function AppSidebar() {
  const [activeItem, setActiveItem] = React.useState("");

  return (
    <Sidebar variant="floating" collapsible="icon">
      <SidebarContent className="rounded-lg border">
        <div className="mb-8 flex w-full items-center justify-center py-5">
          <Image src="/logo-white.svg" alt="Logo" width={25} height={25} />
        </div>
        <SidebarGroup>
          <div className="flex items-center px-2">
            <SidebarGroupContent className="w-fit">
              <Package className="size-4 text-gray-400" />
            </SidebarGroupContent>
            <SidebarGroupLabel className="flex items-center gap-3">
              <p className="font-bold">Used Components</p>
            </SidebarGroupLabel>
          </div>
          <SidebarGroupContent>
            <SidebarMenu>
              <ToggleGroup
                type="single"
                value={activeItem}
                onValueChange={(value) => {
                  if (value) setActiveItem(value);
                }}
                className="flex flex-col gap-2"
              >
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <ToggleGroupItem
                      value={item.title}
                      className="flex justify-start"
                      asChild
                    >
                      <SidebarMenuButton
                        asChild
                        className={cn(
                          "cursor-pointer border-2 border-transparent bg-slate-800 shadow-xl group-data-[collapsible=icon]:hidden",
                          activeItem === item.title && "border-primary",
                        )}
                      >
                        <div>
                          <Button variant="ghost" size="icon" className="w-fit">
                            <GripVertical className="size-3 text-gray-400" />
                          </Button>

                          <span className="text-white">{item.title}</span>

                          {activeItem === item.title && (
                            <div className="flex w-full items-center justify-end gap-1">
                              <SidebarMenuButton className="w-fit p-1">
                                <Trash className="size-3 text-primary" />
                              </SidebarMenuButton>
                              <SidebarMenuButton
                                size="sm"
                                className="w-fit p-1"
                              >
                                <RefreshCcw className="size-3 text-primary" />
                              </SidebarMenuButton>
                            </div>
                          )}
                        </div>
                      </SidebarMenuButton>
                    </ToggleGroupItem>
                  </SidebarMenuItem>
                ))}
              </ToggleGroup>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <div className="flex items-center px-2">
            <SidebarGroupContent className="w-fit">
              <Component className="size-4 text-gray-400" />
            </SidebarGroupContent>
            <SidebarGroupLabel className="flex items-center gap-3">
              <p className="font-bold">All Components</p>
            </SidebarGroupLabel>
          </div>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col gap-2">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={cn(
                      "cursor-pointer border-2 border-transparent bg-slate-800 shadow-xl group-data-[collapsible=icon]:hidden",
                    )}
                  >
                    <span className="text-white">{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="flex h-full justify-end">
          <SidebarGroupContent>
            <SidebarTrigger />
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
