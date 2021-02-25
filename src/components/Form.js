import React from "react";


export default function Form(props) {
    let styles = {
        margin: "15px",
        width: "200px",
        height: "30px"
    }
    return (
      <div>
        <form className="form">
          <input style={styles}
            value={props.search}
            name="search"
            onChange={props.handleInputChange}
            type="text"
            placeholder="Search for Employee"
          />        
        </form>
      </div>
    );
}