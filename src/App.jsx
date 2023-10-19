import './App.css'
import Screen from './components/Screen'
import Console from './components/Console'

function App() {
  
  const randoFunc = () => {
    switch(buttonId) {
      case 1:
      console.log('The lighting has changed color')
      break;
      case 2:
      console.log('WEE WOO WEE WOO WEE WOO!')
      break;
      case 3:
      console.log('go')
      break;
      case 4:
      console.log('stop')
      break;
      case 5:
      console.log('turning left')
      break;
      case 6:
      console.log('turning right')
      break;
      case 7:
      console.log('BOOM!  You died.')
      break;
      case 8:
      console.log('A fresh thermos of coffee appears in your cup holder.')
      break;
      case 9:
      console.log('Coldplay blares over the loudspeakers')
      break;
      default:
      console.log('invalid case')
  }
}

  return (
    <>
      <Screen />
      <Console randoFunc={randoFunc}/>
    </>
  )
}

export default App
