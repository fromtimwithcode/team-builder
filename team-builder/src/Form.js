import React from 'react';

export default function Form(props) {
    const { values, updates, submit } = props;

    const onChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        updates(name, value);
    }

    const onSubmit = event => {
        event.preventDefault();
        submit()
    }

return (
    <form onSubmit={onSubmit}>
        <div>
            <label>Name
                <input
                    type='text'
                    name='name'
                    value={values.name}
                    placeholder='Your name here'
                    maxLength='30'
                    onChange={onChange}
                />
            </label>
            <label>Email
                <input
                    type='email'
                    name='email'
                    value={values.email}
                    maxLength='50'
                    placeholder='Your email here'
                    onChange={onChange}
                />
            </label>
            <label>Role
                <select value={values.role} name='role' onChange={onChange}>
                    <option value=''>-- Select a Position --</option>
                    <option value='In-game leader'>In-game leader</option>
                    <option value='Support'>Support</option>
                    <option value='Entry fragger'>Entry fragger</option>
                    <option value='Awper'>Awper</option>
                </select>
            </label>
            <div>
                <button>submit</button>
            </div>
        </div>
    </form>
)

}