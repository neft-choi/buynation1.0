import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { SharedData, type NavItem } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid } from 'lucide-react';
import AppLogo from './app-logo';
import { mainNavItems } from '@/constants';
import { hasRole } from '@/hooks/use-check-role';

// const mainNavItems: NavItem[] = [
//     {
//         title: 'Dashboard',
//         href: '/dashboard',
//         icon: LayoutGrid,
//         role: 'admin',
//     },
// ];

// const footerNavItems: NavItem[] = [
//     {
//         title: 'Repository',
//         href: 'https://github.com/laravel/react-starter-kit',
//         icon: Folder,
//     },
//     {
//         title: 'Documentation',
//         href: 'https://laravel.com/docs/starter-kits#react',
//         icon: BookOpen,
//     },
// ];

export function AppSidebar() {
    const auth = usePage<SharedData>();
    const headTitle = auth.url.split('/').pop() || 'Dashboard';
    const checkedNavItems = mainNavItems.filter((item: NavItem) => {
        // 로근한 유저정보와 네비의 role을 비교하여 자신의 role일 경우 맞는 네비 아이템만 보여줌
        // console.log(auth.user)
        // console.log(item.role)
        if (hasRole(auth.props.auth.user, 'developer') || hasRole(auth.props.auth.user, item.role!)) {
            // console.log(auth.user.roles, item.role);
            return true; // If the user has the required role, show the item
        }
    });
    return (
        <Sidebar collapsible="icon" variant="inset">
            <Head title={headTitle} />
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/home" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={checkedNavItems} />
            </SidebarContent>

            <SidebarFooter>
                {/* <NavFooter items={footerNavItems} className="mt-auto" /> */}
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
