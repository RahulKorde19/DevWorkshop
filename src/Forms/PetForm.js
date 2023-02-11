import './PetForm.css';

function PetForm() {
  return (
    <div className="pet-form">
      <p>Do you like cats or dogs?</p>
    
      <span>
        <input type="checkbox" id="pet_cat" name="pet" value="Cat" />
        <label htmlFor="pet_cat">Cats 😻</label>
        </span>
        <span>
        <br />
        <input type="checkbox" id="pet" name="pet" value="Dog" />          
        <label htmlFor="pet">Dogs 🐶</label>
      </span>
    </div>
  );
}

export default PetForm;
