declare global {
  interface PlausibleFn {
    (...args: unknown[]): void;
    q?: IArguments[];
    init?: (options?: Record<string, unknown>) => void;
    o?: Record<string, unknown>;
  }

  interface Window {
    plausible: PlausibleFn;
  }

  var plausible: PlausibleFn;
}

export {};