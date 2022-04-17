import React from 'react';
import tables from './../api/tables';
import attributes from './../api/attributes';
import './form.css'
import { useLocation } from "react-router-dom";
import queryString from "query-string";


const Form = () => {
  const { search } = useLocation();
  // console.log(search);
  const { app } = queryString.parse(search);
  // console.log(app);
  let requested_form = app;
  const abc= tables.filter((ele,ind) =>{
      return requested_form === ele.id;
    });
    // console.log(abc);
    let y =[]
    abc[0].attr.map((ele,idx) =>{
      y.push(attributes[ele.id]);
    });

  return (
    <>
    <section className=""> 
              <form className="" id="" action=''>
                  <div className="title"><h1>{requested_form} form</h1></div>
                  <div className='form-design'>
                {y.map((ele) => {
                  return(
                <div className="form-box" key={ele.attr_id}>
                      <div className='att-head'>{ele.placeholder}</div>
                      <input className='input-text' type={ele.type} id={ele.id} maxlength={ele.max_length} placeholder={ele.placeholder} minLength={ele.min_length} pattern={ele.pattern} required />
                    </div>
                )})}
                  <div >
                    <input className="button-form" type="submit" value="Submit" />
                  </div>
                </div>
              </form>
          </section>
    </>
  )
}

export default Form;