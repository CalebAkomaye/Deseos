import React from 'react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const Profile = ({ url }: { url?: string | null | undefined }) => {
  return (
    <Avatar className={cn('text-xs w-8 h-8')}>
      <AvatarFallback>CA</AvatarFallback>
      <AvatarImage src={`${url.toString()}`} />
    </Avatar>
  );
};

export default Profile;
