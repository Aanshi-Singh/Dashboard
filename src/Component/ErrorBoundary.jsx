import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  handleRetry = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#fff', border: '1px solid #eee', borderRadius: 8, padding: 32, textAlign: 'center' }}>
            <h2>Something went wrong.</h2>
            <p>Please try refreshing the page.</p>
            <button onClick={this.handleRetry} style={{ marginTop: 16, padding: '8px 24px', borderRadius: 4, background: '#222', color: '#fff', border: 'none', cursor: 'pointer' }}>
              Refresh
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary; 