import React from 'react';
import tables from './../api/tables';
import attributes from '../api/attributes';

const form = ({requested_form}) => {
    // console.log(requested_form);
    const table_len = tables.length;
    let array = [];
    for(let i = 0; i<table_len; i++){
        // console.log(i);
        if(tables[i].id == requested_form){
            // console.log(requested_form);
            array = tables[i].attr;
            // console.log();
        }
        // console.log(array);
    }
    // console.log(array);
    let x = [];
    array.map((ele) =>{
        // console.log(ele.id);
        // console.log(attributes[ele.id]);
        x.push(attributes[ele.id])
    })
    // console.log(x);
  return (
    <>
    <section className="main-container"> 
              <form className="mentor-container" id="mentor-form">
                  <div className="title"><h1>{requested_form} form</h1></div>
                {x.map((ele) => {
                  return(
                <div className="field" key={ele.attr_id}>
                      <input type={ele.type} id={ele.id} maxlength={ele.max_length} placeholder={ele.placeholder} required />
                      <span>{ele.placeholder}</span>
                    </div>
                )})}
                  <div className="button-form">
                    <button type="submit" id="btn-mentor">Submit</button>
                  </div>
              </form>
          </section>
    </>
  )
}

export default form