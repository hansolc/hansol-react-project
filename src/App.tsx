import './App.less';
import { Button } from 'antd';
import { ButtonTest } from '@components/test';
import { useEffect } from 'react';

function App() {  
  return (
    <>
      <Button type="primary">Frist Button</Button> 
      <ButtonTest>
        helo world
      </ButtonTest>
    </>
  );
}

export default App;