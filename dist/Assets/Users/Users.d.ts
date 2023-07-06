import React from 'react';
export interface UsersProps {
    size?: number;
    iconColor?: string;
}
declare const Users: ({ size, iconColor }: UsersProps) => React.JSX.Element;
export default Users;
