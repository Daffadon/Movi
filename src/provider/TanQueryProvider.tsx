import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC } from "react";
import ChildrenProps from "../data/dto/childrenProps.ts";
const TanQueryProvider: FC<ChildrenProps> = ({ children }) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default TanQueryProvider;
