import { User, UserRole } from "@/types";

export function can(user: User, permission: string): boolean {
    return user.permissions.includes(permission);
}

export function hasRole(user: User, role: UserRole): boolean {
    return user.roles.includes(role);
}