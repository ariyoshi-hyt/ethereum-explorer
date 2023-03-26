import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClientProvider } from "react-query";
import { queryClient } from "@/lib/react-query";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Component className="font-sans" {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}
