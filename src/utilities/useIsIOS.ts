import { useState, useEffect } from 'react';
import dayjs from 'dayjs';

const checkForIOS = () => {
  if (navigator.standalone) return false;

  const now = dayjs().toString();
  console.log(`now`, now);

  const lastPrompt = localStorage.getItem(`installPrompt`);
  const days = dayjs().diff(lastPrompt, `day`);

  const ua = window.navigator.userAgent;
  const webkit = !!ua.match(/WebKit/i);
  const isIPad = !!ua.match(/iPad/i);
  const isIPhone = !!ua.match(/iPhone/i);
  const isIOS = isIPad || isIPhone;
  const isSafari = isIOS && webkit && !ua.match(/CriOS/i);
  const prompt = isIOS && isSafari && (Number.isNaN(days) || days > 30);

  if (prompt && `localStorage` in window) {
    localStorage.setItem(`installPrompt`, now);
  }

  return { isIOS, isSafari, prompt };
};

export default function useIsIOS() {
  const [isIOS, setIsIOS] = useState({});

  useEffect(() => {
    setIsIOS(checkForIOS());
  }, []);
  return isIOS;
}
