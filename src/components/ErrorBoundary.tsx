import React from 'react';
import i18n from '../i18n';

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<Props, State> {
  declare state: State;
  declare props: Readonly<Props>;

  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('ErrorBoundary caught:', error, info);
  }

  render() {
    if (this.state.hasError) {
      const t = i18n.t.bind(i18n);
      return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4 text-center">
          <div className="text-5xl mb-6">⚠️</div>
          <h1 className="text-2xl font-bold text-slate-900 mb-2">{t('error.title')}</h1>
          <p className="text-slate-500 mb-8 max-w-md">
            {this.state.error?.message || t('error.desc')}
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-600 text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors"
          >
            {t('error.reload')}
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
