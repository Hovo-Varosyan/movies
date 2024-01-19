import '../../../assets/style/navigation/search.scss'
import { Submit } from '../../submit'
export default function Search({value}) {
  return (
   
      <form className='form__search'>
        <input type='search' placeholder='Имя фылма'/>
        <Submit value={"Поиск"}/>
      </form>
  )
}
