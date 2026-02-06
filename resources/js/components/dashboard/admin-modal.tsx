import * as React from 'react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';

type AdminModalSize = 'sm' | 'md' | 'lg' | 'xl';

interface AdminModalProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    trigger?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
    size?: AdminModalSize;
}

function AdminModalRoot({
    open,
    onOpenChange,
    trigger,
    title,
    description,
    children,
    footer,
    className,
    size = 'md',
}: AdminModalProps) {
    const sizeClassMap: Record<AdminModalSize, string> = {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-lg',
        lg: 'sm:max-w-2xl',
        xl: 'sm:max-w-4xl',
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            {trigger ? <DialogTrigger asChild>{trigger}</DialogTrigger> : null}
            <DialogContent className={cn(sizeClassMap[size], className)}>
                {(title || description) && (
                    <DialogHeader>
                        {title ? <DialogTitle>{title}</DialogTitle> : null}
                        {description ? <DialogDescription>{description}</DialogDescription> : null}
                    </DialogHeader>
                )}
                {children}
                {footer ? <DialogFooter>{footer}</DialogFooter> : null}
            </DialogContent>
        </Dialog>
    );
}

function AdminModalTrigger({ children }: { children: React.ReactNode }) {
    return <DialogTrigger asChild>{children}</DialogTrigger>;
}

function AdminModalHeader({ className, ...props }: React.ComponentProps<'div'>) {
    return <DialogHeader className={className} {...props} />;
}

function AdminModalTitle({ className, ...props }: React.ComponentProps<typeof DialogTitle>) {
    return <DialogTitle className={className} {...props} />;
}

function AdminModalDescription({ className, ...props }: React.ComponentProps<typeof DialogDescription>) {
    return <DialogDescription className={className} {...props} />;
}

function AdminModalFooter({ className, ...props }: React.ComponentProps<'div'>) {
    return <DialogFooter className={className} {...props} />;
}

export const AdminModal = Object.assign(AdminModalRoot, {
    Trigger: AdminModalTrigger,
    Header: AdminModalHeader,
    Title: AdminModalTitle,
    Description: AdminModalDescription,
    Footer: AdminModalFooter,
});
