import './App.css';
import Activity from './Pages/Activity';
import Dashboard from './Pages/Dashboard';
import Patient from './Pages/Patient';
import Schedule from './Pages/Schedule';
import Settings from './Pages/Settings';
import Teams from './Pages/Teams';

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter,Routes,Route } from "react-router-dom";


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="Activity" element={<Activity />} />
          <Route path="Patient" element={<Patient />} />
          <Route path="Schedule" element={<Schedule />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="Teams" element={<Teams />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
