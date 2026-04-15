import { Suspense } from "react";
import ToastDashboardView from "@/components/ToastDashboardView";

export const metadata = {
  title: "Toast Dashboard"
};

export default function ToastDashboardPage() {
  return (
    <Suspense fallback={<div className="page-shell pt-6 pb-16" />}>
      <ToastDashboardView />
    </Suspense>
  );
}
