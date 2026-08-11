"use client";

import type { ReactNode } from "react";

export const APP_STORE_URL =
  "https://apps.apple.com/es/app/ansioff-ansiedad-y-calma/id6761905804";

type AppStoreLinkProps = {
  children: ReactNode;
  className?: string;
  placement: string;
};

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

export default function AppStoreLink({
  children,
  className,
  placement,
}: AppStoreLinkProps) {
  const trackClick = () => {
    const analyticsWindow = window as AnalyticsWindow;

    analyticsWindow.gtag?.("event", "app_store_click", {
      event_category: "download",
      event_label: placement,
      link_url: APP_STORE_URL,
      transport_type: "beacon",
    });
  };

  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={trackClick}
    >
      {children}
    </a>
  );
}
