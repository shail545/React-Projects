
import './App.css';
import data from './data'
import Tours from './components/Tours';

function App() {
  const [tours,setTours] = useState(data);
  return (
   <div>
    <h2>Plan With Shail</h2>
    <Tours tours={tours}></Tours>
 
   </div>
  );
}

export default App;
