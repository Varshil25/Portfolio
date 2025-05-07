import { ThemeProvider } from 'next-themes';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';

function App() {
  return (
    <ThemeProvider attribute="class">
      <div className="App bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white">
   
        {/* You can add other components here */}
        <Home/>
        
      </div>
    </ThemeProvider>
  );
}

export default App;
