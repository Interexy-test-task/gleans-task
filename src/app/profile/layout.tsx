import React, { FC, ReactNode } from 'react';

const ProfileLayout: FC<{ children: ReactNode; create: ReactNode }> = ({
  children,
  create,
}) => {
  return (
    <main className="max-w-[1100px] mx-8 md:mx-auto my-12 md:my-40">
      {children}
      {create || null}
    </main>
  );
};

export default ProfileLayout;
