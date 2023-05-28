import './Form.css';

import { observer } from 'mobx-react';
import { useStoresHook } from '../../store/use-stores-hook';
import { useState } from 'react';

function Form() {

    const {popupForm} = useStoresHook();
    function closePopup(){
      popupForm.setFormHidden();
    }

    const [fromPost, setFromPost] = useState('')

  const [nameValue, setnameValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [peopleValue, setPeopleValue] = useState('');

  function changeNameInputValue(e){
    setnameValue(e.target.value);
  }
  function changePhoneInputValue(e){
    setPhoneValue(e.target.value);
  }
  function changePeopleInputValue(e){
    setPeopleValue(e.target.value);
  }

    //form Submit
    function formSubmit(evt){
      evt.preventDefault();


        const formData = {'name': nameValue, 'phone': phoneValue, 'people': peopleValue};
        console.log('sending: ', JSON.stringify(formData).toString());

      const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(formData).toString()
      };

      return fetch("http://localhost:8040/form-submit", requestOptions)

        .then(response => response.json())
        .then((data) => {
          console.log(data);
          setFromPost(fromPost);
        });
    }


    return (
      <div className={popupForm.showForm}>
        <div className="form-overlay">
          <form className="form" onSubmit={formSubmit}>
            <div className="form--close" onClick={closePopup}>╳</div>
            <div className="form--title">Заявка на гру</div>
            <div>{fromPost}</div>
            <input value={nameValue} onChange={changeNameInputValue} className="form--input" id="form-name" placeholder="Ваше ім’я" type="text"/>
            <input value={phoneValue} onChange={changePhoneInputValue} className="form--input" id="form-phone" placeholder="Ваш номер телефону" type="phone"/>
            <input value={peopleValue} onChange={changePeopleInputValue} className="form--input" id="form-players" placeholder="Кількість гравців" type="number" min="2"/>
            <fieldset className="form--fieldset">
              <input className="form--checkbox" type="checkbox"/>
              Погоджуюсь з правилами обробки персональних даних та угодою користувачів
            </fieldset>
            <center><button className="form--btn">Відправити заявку</button></center>
          </form>
        </div>
      </div>
    );
}
export default observer(Form);