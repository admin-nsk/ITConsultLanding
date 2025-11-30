"use client";

import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const COOKIE_CONSENT_KEY = "cookie-consent";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, "accepted");
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-t border-border shadow-lg transition-all duration-300 animate-in slide-in-from-bottom">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-foreground">
              Мы используем cookie для улучшения работы сайта и персонализации контента. 
              Продолжая использовать сайт, вы соглашаетесь с использованием cookie.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button onClick={handleAccept} size="sm">
              Принять
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

