import Main from './Main2';
import Structure from './pages/Structure';
import {Routes, Route} from 'react-router-dom';

function App () {
  return(
    <>
      <div>
        <Routes>
          <Route path = "/" element={<Main/>} />
          <Route path = "/structure" element={<Structure/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;