import React, { useState, useEffect } from 'react';
import AppHeaderWrapper from './components/app/AppHeaderWrapper';
import AppLayout from './components/app/AppLayout';
import AppMenuWrapper from './components/app/AppMenuWrapper';
import { CheckMobileUtils } from './utils/CheckMobileUtils';

const App = () => {

  const [status, setStatus] = useState("closed");

  return (
      <AppLayout>
          <AppHeaderWrapper setStatus={()=>setStatus(status == "opened"? "closed" : "opened")}/>
          <AppMenuWrapper menuStatus={status}/>
      </AppLayout>
  );
}

export default App;