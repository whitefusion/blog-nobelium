type WindowExtened = Window & { gtag?: Function };

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (gTag, url) => {
  (window as WindowExtened).gtag("config", gTag, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }) => {
  (window as WindowExtened)?.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
