import { ThemeProvider } from 'next-themes';
import './App.css';
import { NavBar } from './components/NavBar'; 
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <ThemeProvider attribute="class">
      <div className="App bg-white dark:bg-gray-900 min-h-screen text-black dark:text-white">
        <NavBar />
        {/* You can add other components here */}
      </div>
    </ThemeProvider>
  );
}

export default App;
