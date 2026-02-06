import * as React from 'react';

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from '@/components/ui/drawer';
import { cn } from '@/lib/utils';

interface AdminDrawerProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    trigger?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
}

function AdminDrawerRoot({
    open,
    onOpenChange,
    trigger,
    title,
    description,
    children,
    footer,
    className,
}: AdminDrawerProps) {
    return (
        <Drawer open={open} onOpenChange={onOpenChange}>
            {trigger ? <DrawerTrigger asChild>{trigger}</DrawerTrigger> : null}
            <DrawerContent className={cn(className)}>
                {(title || description) && (
                    <DrawerHeader className="text-left">
                        {title ? <DrawerTitle>{title}</DrawerTitle> : null}
                        {description ? <DrawerDescription>{description}</DrawerDescription> : null}
                    </DrawerHeader>
                )}
                {children}
                {footer ? <DrawerFooter>{footer}</DrawerFooter> : null}
            </DrawerContent>
        </Drawer>
    );
}

function AdminDrawerTrigger({ children }: { children: React.ReactNode }) {
    return <DrawerTrigger asChild>{children}</DrawerTrigger>;
}

function AdminDrawerHeader({ className, ...props }: React.ComponentProps<'div'>) {
    return <DrawerHeader className={className} {...props} />;
}

function AdminDrawerTitle({ className, ...props }: React.ComponentProps<typeof DrawerTitle>) {
    return <DrawerTitle className={className} {...props} />;
}

function AdminDrawerDescription({ className, ...props }: React.ComponentProps<typeof DrawerDescription>) {
    return <DrawerDescription className={className} {...props} />;
}

function AdminDrawerFooter({ className, ...props }: React.ComponentProps<'div'>) {
    return <DrawerFooter className={className} {...props} />;
}

function AdminDrawerClose({ children }: { children: React.ReactNode }) {
    return <DrawerClose asChild>{children}</DrawerClose>;
}

export const AdminDrawer = Object.assign(AdminDrawerRoot, {
    Trigger: AdminDrawerTrigger,
    Header: AdminDrawerHeader,
    Title: AdminDrawerTitle,
    Description: AdminDrawerDescription,
    Footer: AdminDrawerFooter,
    Close: AdminDrawerClose,
});
