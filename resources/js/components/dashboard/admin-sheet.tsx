import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

type AdminSheetSize = 'sm' | 'md' | 'lg' | 'xl';
type AdminSheetSide = 'top' | 'right' | 'bottom' | 'left';

interface AdminSheetProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    trigger?: React.ReactNode;
    title?: React.ReactNode;
    description?: React.ReactNode;
    children?: React.ReactNode;
    footer?: React.ReactNode;
    className?: string;
    size?: AdminSheetSize;
    side?: AdminSheetSide;
}

function AdminSheetRoot({
    open,
    onOpenChange,
    trigger,
    title,
    description,
    children,
    footer,
    className,
    size = 'md',
    side = 'right',
}: AdminSheetProps) {
    const sizeClassMap: Record<AdminSheetSize, string> = {
        sm: 'sm:max-w-sm',
        md: 'sm:max-w-lg',
        lg: 'sm:max-w-2xl',
        xl: 'sm:max-w-4xl',
    };

    return (
        <Sheet open={open} onOpenChange={onOpenChange}>
            {trigger ? <SheetTrigger asChild>{trigger}</SheetTrigger> : null}
            <SheetContent
                side={side}
                className={cn('w-screen max-h-svh overflow-y-auto', sizeClassMap[size], className)}
            >
                {(title || description) && (
                    <SheetHeader>
                        {title ? <SheetTitle className={cn('text-2xl font-bold', className)}>{title}</SheetTitle> : null}
                        {description ? <SheetDescription>{description}</SheetDescription> : null}
                    </SheetHeader>
                )}

                {/* 본문 영역 */}
                {children}

                {/* 버튼 영역 */}
                {footer ? <SheetFooter className='border-t'>{footer}</SheetFooter> : null}
            </SheetContent>
        </Sheet>
    );
}

function AdminSheetTrigger({ children }: { children: React.ReactNode }) {
    return <SheetTrigger asChild>{children}</SheetTrigger>;
}

function AdminSheetHeader({ className, ...props }: React.ComponentProps<'div'>) {
    return <SheetHeader className={className} {...props} />;
}

function AdminSheetTitle({ className, ...props }: React.ComponentProps<typeof SheetTitle>) {
    return <SheetTitle className={className} {...props} />;
}

function AdminSheetDescription({ className, ...props }: React.ComponentProps<typeof SheetDescription>) {
    return <SheetDescription className={className} {...props} />;
}

function AdminSheetFooter({ className, ...props }: React.ComponentProps<'div'>) {
    return <SheetFooter className={className} {...props} />;
}

export const AdminSheet = Object.assign(AdminSheetRoot, {
    Trigger: AdminSheetTrigger,
    Header: AdminSheetHeader,
    Title: AdminSheetTitle,
    Description: AdminSheetDescription,
    Footer: AdminSheetFooter,
});
