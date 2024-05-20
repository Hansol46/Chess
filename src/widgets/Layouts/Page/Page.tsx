import React, { FC, ReactNode } from "react";

import { cn } from "@shared/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Page: FC<Props> = ({ children, className }) => (
  <div className={cn("bg-black h-screen", className)}>{children}</div>
);
