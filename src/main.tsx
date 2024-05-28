import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "./queryClient.ts";
import App from "./App.tsx";
import "@/styles/index.css";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element. Application not started!");
}
