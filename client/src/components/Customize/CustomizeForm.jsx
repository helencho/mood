import React, { Component } from 'react'

// Presentational 
class CustomizeForm extends Component {
    render() {
        const { customType, emojis, input, chosenEmoji, chosenName, handleSubmit, handleInput, handleClick } = this.props 

        return (
            <div className="customize-form-container">
                <h1>Customize your {customType}</h1>
                <form className="chosen-container" onSubmit={handleSubmit}>
                    <p>{chosenEmoji}</p>
                    <input type="text" placeholder="Name" name="chosenName" value={chosenName} onChange={handleInput} />
                    <input type="submit" value="Save" disabled={!chosenEmoji || !chosenName} />
                </form>
                <div className="emojis-container">
                    {emojis.map((mood, index) => (
                        <p key={index}><span role="img" aria-label="smiley" onClick={() => handleClick(mood)}>{mood}</span></p>
                    ))}
                </div>
            </div>
        )
    }
}

export default CustomizeForm 