import React,{useState} from 'react';
import Whatsapp from './App';


 function Form(){
    const [name ,setName]=useState('');
    const [email ,setEmail]=useState('');

    function afterSubmit(e){
        
        setName('');
        setEmail('');
    }
     return(
        <form onSubmit={afterSubmit}>
            <label>
                Name:
                <input type='text' value={name} onChange={(e)=>setName(e.target.name)}></input>
            </label>
            <label>
                Email:
                <input type='email' value={email} onChange={(e)=>setEmail(e.target.email)}></input>
                
            </label>
            <button type='submit'>
                Submit
            </button>
        </form>
     )
        
     
    
 }