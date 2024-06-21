import FormStyled from './FormStyled';
import ButtonDefault from '../button-default/ButtonDefault';

function Form() {
  function handleClick() {
    alert('Thanks for the message. We will answer you ASAP.');
  }

  return (
    <FormStyled>
      <h2>Do You Want to Be Contacted?</h2>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message"></textarea>
      </div>
      <div>
        <ButtonDefault label="Send" action={handleClick} />
      </div>
    </FormStyled>
  );
}

export default Form;
