import logo from './logo.svg';
import './App.css';
import {Dashboard} from './Dashboard'
import ErrorBoundary from './Component/ErrorBoundary';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="App">
        <ErrorBoundary>
          <Dashboard />
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;
