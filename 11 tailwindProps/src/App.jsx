
import './App.css'
import Card from './componets/card'

function App() {

  let obj1 = {
    name: "Bikash Dhakal",
    price: 2000
  }
  let obj2 = {
    name: "Manjil Chhetri",
    price: 5000
  }

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-2xl'>Cards</h1>
      <Card myobj = {obj1}/>
      <Card myobj = {obj2}/>
    </>
  )
}

export default App
