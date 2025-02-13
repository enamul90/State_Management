import React from 'react';
import myFormData from '../stors/inputHande.js';


const InputData = () => {

    let {setMail, email,description ,setDescription} = myFormData()

    const todos = myFormData((state) => state.todos);
    const addTodo = myFormData((state) => state.addTodo);

    console.log(todos)






    const createArray = ()=>{

        let newEmail = email;
        let newDescription = description;
        addTodo({email:newEmail, description:newDescription})

    }



    return (
        <div className="container">

            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                <input onChange={(e) => setMail(e.target.value)} type="email" className="form-control"

                       placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                <textarea  onChange={(e) => setDescription(e.target.value)} className="form-control"  rows="3"></textarea>
            </div>

            <button className="btn btn-primary" onClick={(a)=>createArray()} type={"button"}>hellow</button>

            {/*{*/}
            {/*    data.map((item, index) =>{*/}
            {/*        return (*/}
            {/*            <div key={index}>*/}
            {/*                <h3>{item.email}</h3>*/}
            {/*                <p>{item.description}</p>*/}
            {/*            </div>*/}
            {/*        )*/}
            {/*    })*/}
            {/*}*/}

        </div>
    );
};

export default InputData;