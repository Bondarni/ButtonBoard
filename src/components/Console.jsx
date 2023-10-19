import Button from "./Button"


// eslint-disable-next-line react/prop-types
const Console = ({ randoFunc }) => {

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  const chooseRandom = () => {
    const i = Math.floor(Math.random() * 10)
    const buttonId = array.splice(i, 1)
    console.log(buttonId)
  }

  return (
    <div className="console">
      <h2 className="messages">Ship Alerts Go Here</h2>
      <Button randoFunc={randoFunc} chooseRandom={chooseRandom}/>
    </div>
  )
}

export default Console