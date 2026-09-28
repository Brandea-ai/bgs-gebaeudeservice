"use client";

import { ArrowCounterClockwise, Warning } from "@phosphor-icons/react/dist/ssr";
import { Component, ReactNode } from "react";
import { navDicts } from "../../../content/navigation";
import type { Locale } from "../../../shared/i18n";

interface Props {
  children: ReactNode;
  lang?: Locale;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

/** Fehlerseite in der Sprache der Seite. Den Stacktrace sehen nur Entwicklungs-Builds. */
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      const texts = navDicts[this.props.lang ?? "de"].errorPage;
      return (
        <div className="flex min-h-screen items-center justify-center bg-stone p-8">
          <div className="flex w-full max-w-2xl flex-col items-start p-8">
            <Warning
              weight="duotone"
              className="mb-6 size-8 shrink-0 text-signal"
              aria-hidden="true"
            />
            <h1 className="t-h2 mb-6 text-ink">{texts.title}</h1>

            {process.env.NODE_ENV === "development" && (
              <div className="mb-6 w-full overflow-auto bg-white p-4">
                <pre className="whitespace-break-spaces text-sm text-mute">
                  {this.state.error?.stack}
                </pre>
              </div>
            )}

            <button
              type="button"
              onClick={() => window.location.reload()}
              className="press inline-flex h-12 items-center gap-2 rounded-[0.25rem] bg-signal px-6 font-medium text-white hover:bg-signal-dark"
            >
              <ArrowCounterClockwise weight="duotone" className="size-4" aria-hidden="true" />
              {texts.reload}
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
