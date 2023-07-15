import React from 'react';
// import { Button } from 'antd';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement } from './counterSlice';
// import { RootState } from './store';
import MainLayout from './Layout/MainLayout';
import ManageForm from './pages/ManageForm';
import ManageLayout from './pages/ManageLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  // const counter = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index path="/manageForm" element={<ManageForm />} />
          <Route  path="/manageLayout" element={<ManageLayout />} />
        </Route>
      </Routes>
    </Router>


  );
}

export default App;
