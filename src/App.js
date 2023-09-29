
import Header from './componennts/Header'
import Home from './pages.js/Home'
import { useState } from 'react'
const App = () => {
  const [city,setCity] = useState("Bishkek")

  return (
    <div>
<Header setCity = {setCity} city = {city}/>
<Home city = {city}/>
    </div>
  );
}

export default App;
// пропсы это обьект и они передаються мы их передаем обькты с информацией с род к доч
  // дестукцирзация
// const user = {
//   name:"Sasha",
//   age:"23"
// }
// const {name,age} = user
// const user = {
//   name:"Sasha",
//   age:"23"
// }
// запрос через аксиос всегда обьект