import React, {useState} from 'react'

const AddTask = ({onAdd}) => {
    const [text, setText] = useState('');
    const [date, setDate] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        

        if(!text) {
            alert('Please fill the fields ')
            return
        }

        onAdd({text, date, reminder})
        
        setText('')
        setDate('')
        setReminder(false)
    }
  return (
    <form className='add-form' onSubmit={onSubmit}>
        <div className='form-control '>
            <label>Email</label>
            <input type='email'
             placeholder='Enter Email'
             value={text}
             onChange={(e) => setText(e.target.value) }/>
        </div>
        <div className='form-control'>
            <label>Password</label>
            <input type='password'
             placeholder='Enter Password'
             value={date}
             onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className='form-control form-control-check'>
            <label>Reminder me</label>
            <input type='checkbox'
            checked={reminder}
            value={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}  />
        </div>
        <input type='submit' value='Login' 
        className='btn btn-block'/>

    </form>
  )
}

export default AddTask