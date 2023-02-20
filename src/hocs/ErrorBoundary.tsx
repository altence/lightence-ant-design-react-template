import { Component, ReactNode, ErrorInfo, ComponentType, PropsWithChildren } from 'react';

interface ErrorBoundaryState {
  error: Error | null;
}

export class ErrorBoundary extends Component<PropsWithChildren, ErrorBoundaryState> {
  state: ErrorBoundaryState = { error: null };

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ error });
    console.error(error, errorInfo);
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { error };
  }

  render(): ReactNode {
    const { error } = this.state;

    if (!error) {
      return this.props.children;
    }

    return (
      <div>
        <h2>Something went wrong.</h2>
        <details style={{ whiteSpace: 'pre-wrap' }}>{error.toString()}</details>
      </div>
    );
  }
}

export const withErrorBoundary = <Props extends object>(
  Component: ComponentType<Props>,
): ((props: Props) => JSX.Element) => {
  return (props: Props) => (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );
};
