import './App.css';

import { ChannelContainer, ChannelListContainer } from './components';

const App = () => {
  return(
    <div className='container'> 

    <ChannelListContainer/>
    <ChannelContainer/>
    </div>
  );
}

export default App;