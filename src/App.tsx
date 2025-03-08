
import { Route, Routes } from 'react-router-dom'
import './App.css'
import TransactionList from './components/TransactionList/TransactionList'
import MainWindow from './containers/MainWindow/MainWindow'
import FormTransaction from './containers/FormTransaction/FormTransaction'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<MainWindow/>}>
          <Route index element={<TransactionList/>}/>
          <Route path='add-transaction' element={<FormTransaction/>}/>
          <Route path='rename-transaction/:id' element={<FormTransaction/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
