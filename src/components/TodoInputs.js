import React, { Component } from 'react'

export default class TodoInputs extends Component {
    render() {

      const { item, handleChange, handleSubmit, editItem } = this.props;

        return (
           <form onSubmit = { handleSubmit }>
              <div clasName='form-group'>
                <input 
                type='text' 
                className='form-control' 
                value = { item }
                onChange = { handleChange }
                />
                <button className= { editItem ? 'btn btn-block btn-success my-3': 'btn btn-block btn-primary my-3'}>
                  { editItem ? 'Edit Item': 'Add Item' }
                </button>
              </div>
           </form>
        )
    }
}
