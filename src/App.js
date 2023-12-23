import Main from './Main';
import Show from './Show';
import {Routes, Route} from 'react-router-dom';

function App () {
  return(
    <>
      <div>
        <Routes>
          <Route path = "/con" element={<Main/>} />
          <Route path = "/" element={<Show/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App;