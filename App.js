import './App.css';
import CalendarT from "./components/formDay";





const App = () => {
  return (
    <div className="app">
      <h1 className='span'>
        Mein Kalender
      </h1>
      <div className='box'>
      <CalendarT />
      </div>
    </div>
  );
};



export {App};
