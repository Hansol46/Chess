import React, { FC, ReactNode } from "react";

import { cn } from "@shared/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Container: FC<Props> = ({ children, className }) => (
  <div className={cn("container", className)}>{children}</div>
);
