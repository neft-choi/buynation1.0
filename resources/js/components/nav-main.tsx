import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { ChevronDown } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage();
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    const toggleMenu = (title: string) => {
        setActiveMenu((prev) => (prev === title ? null : title));
    };

    const currentPath = page.url;

    const autoOpenTitle = useMemo(() => {
        const parent = items.find((item) => item.items?.some((subItem) => subItem.href === currentPath));
        return parent?.title ?? null;
    }, [items, currentPath]);

    useEffect(() => {
        if (autoOpenTitle) setActiveMenu(autoOpenTitle);
    }, [autoOpenTitle]);

    return (
        <SidebarGroup className="px-2 py-0">
            {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
            <SidebarMenu>
                {items.map((item, index) => (
                    <SidebarMenuItem key={item.title || index}>
                        {item.items && item.items.length > 0 ? (
                            <>
                                <SidebarMenuButton onClick={() => toggleMenu(item.title)} className="cursor-pointer justify-between">
                                    <span className="flex items-center gap-2">
                                        {item.icon && <item.icon className="h-4 w-4" />}
                                        <span>{item.title}</span>
                                    </span>
                                    <ChevronDown
                                        className={`h-4 w-4 transition-transform duration-200 ${activeMenu === item.title ? 'rotate-180' : ''}`}
                                    />
                                </SidebarMenuButton>

                                {activeMenu === item.title && (
                                    <SidebarMenuSub>
                                        {item.items.map((subItem, subIndex) => (
                                            <SidebarMenuSubItem key={subItem.title || subIndex}>
                                                <SidebarMenuSubButton asChild data-active={page.url === subItem.href}>
                                                    <Link href={subItem.href}>{subItem.title}</Link>
                                                </SidebarMenuSubButton>
                                            </SidebarMenuSubItem>
                                        ))}
                                    </SidebarMenuSub>
                                )}
                            </>
                        ) : (
                            <SidebarMenuButton asChild isActive={item.href ? page.url === item.href : false} tooltip={{ children: item.title }}>
                                <Link href={item.href} prefetch>
                                    {item.icon && <item.icon />}
                                    <span>{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        )}
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
