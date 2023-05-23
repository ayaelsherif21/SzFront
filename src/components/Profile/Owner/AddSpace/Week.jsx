import React, { useState } from 'react'
import styles from "./Week.module.css"
// import moment from 'moment/moment';
export default function Week() {
  const [checkboxes, setCheckboxes] = useState([
    { id: 'checkbox1',Day:"Sunday" , checked: false },
    { id: 'checkbox2',Day:"Monday" , checked: false },
    { id: 'checkbox3',Day:"Tuseday" , checked: false },
    { id: 'checkbox4',Day:"Wednesday" , checked: false },
    { id: 'checkbox5',Day:"Thursday" , checked: false },
    { id: 'checkbox6',Day:"Friday" , checked: false },
    { id: 'checkbox7',Day:"Saturday" , checked: false },
    
  ]);

  const handleCheckboxChange = (checkboxId) => {
    const updatedCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.id === checkboxId) {
        return {
          ...checkbox,
          checked: !checkbox.checked
        };
      }
      return checkbox;
    });
    setCheckboxes(updatedCheckboxes);
  };

  return (
   <>
   
   <div className={`container py-4 px-4 bg-white shadow w-50 ${styles.week}`}>
    <div className={`row my-3 py-3 m-auto shadow ${styles.Weekly}`}>
     {checkboxes.map((checkbox) => (
        <div key={checkbox.id} className='d-flex'>
            <div className="col-lg-4 my-2 ">
    <div className="week mt-2">
   <label className={`mx-2 ${styles.switch}`}>
  <input type="checkbox" className={` ${styles.checkbox}` } />
          <div className={`${styles.slider}`} />
        </label>
        {checkbox.Day}
        </div>
            </div>
         
    <div className="col-lg-2 my-2">
            <select disabled={checkbox.checked}  className={`w-175 ${styles.checkControl}`} required>
              <span className={`${styles.selectArr}`} />
                <option value selected hidden>start:</option>
                <option>9</option>
                <option>10</option>
                <option>11 </option>
                <option>12</option>
              </select>
    </div>
       
    <div className="col-lg-2 my-2">
            <select  disabled={checkbox.checked} className={`w-175 ${styles.checkControl}`} required>
              <span className={`${styles.selectArr}`} />
                <option value selected hidden>end:</option>
                <option>20</option>
                <option>21</option>
                <option>22 </option>
                <option>23</option>
              </select>
    </div>
    <div className="col-lg-3 my-3 ms-5 ">
    <label className={`${styles.switchday}`}>  
    <input type="checkbox"  
    checked={checkbox.checked}
              onChange={() => handleCheckboxChange(checkbox.id)} />
     <span className={`${styles.sliderday}`}></span>
     </label>
    
     </div> 
   
    
    </div>
    
    ))}
    
  </div>
     </div>
   

   </>
  )
}

    