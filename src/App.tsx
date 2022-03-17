import GlobalStyles from './styles/GlobalStyles';

import Homepage from './components/Homepage';

import { MovieContextProvider } from './Contexts/MovieContexts';

function App() {
  return (
    <MovieContextProvider>
      <Homepage />
      <GlobalStyles />
    </MovieContextProvider>
  );
}

export default App;
