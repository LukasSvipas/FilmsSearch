import {useState} from "react";
const Search=(props)=>{
    const [term,setTerm]=useState('');   //i cia eina paieskos terminas

    const handleChange = (e)=>{
        setTerm(e.target.value)
    }

    console.log(term)

    const submitHandler = (e) => {
      e.preventDefault();
      props.onSearch(term)
    }
    return(
        <div className="container">
            <div className="card">
                <div className="card-body">
                    <form onSubmit={submitHandler}>
                        <input type="text"
                            placeholder="Film name"
                            onChange={handleChange}
                            className="form-control"/>
                        <button type="submit" className="btn btn-dark btn-sm m-2">Search</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Search