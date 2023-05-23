import React , {useState} from 'react'

export default function Bio() {
    const [addDesc, setAddDesc] = useState({
        description: '',
      });

      const handleInputChange = (e) => {
        setAddDesc({...addDesc,[e.target.description]: e.target.value,
        });
      };
  return (
    <div className='w-50 m-auto'>
        <h2 className="Bio"
         style={{ color: "#4b86b4",
         fontSize: "25px"}}>Bio</h2>
        <textarea
              className="form-control"
              placeholder="Description"
              name="description"
              value={addDesc.description}
              onChange={handleInputChange}
            />
    </div>
  )
}
