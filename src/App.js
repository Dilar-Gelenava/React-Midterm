import ErrorBoundary from './components/error-boundary';
import MainPage from './pages/mainPage';
function App() {
  return (
    <ErrorBoundary>
      <MainPage />
    </ErrorBoundary>
  );
}

export default App;
