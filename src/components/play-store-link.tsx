"use client";

import type { ReactNode } from "react";

export const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.ansioff.app";

type PlayStoreLinkProps = {
  children: ReactNode;
  className?: string;
  placement: string;
};

type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
};

export default function PlayStoreLink({
  children,
  className,
  placement,
}: PlayStoreLinkProps) {
  const trackClick = () => {
    const analyticsWindow = window as AnalyticsWindow;

    analyticsWindow.gtag?.("event", "play_store_click", {
      event_category: "download",
      event_label: placement,
      link_url: PLAY_STORE_URL,
      transport_type: "beacon",
    });
  };

  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={trackClick}
    >
      {children}
    </a>
  );
}
