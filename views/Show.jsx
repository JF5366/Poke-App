import React from 'react'

function Show(props) {
    return (
        <div>
            <h1>Gotta Catch 'Em All</h1>
            <h2>The <strong>{props.pokemon.name}</strong></h2>
            <img src={`${props.pokemon.img}` + ".jpg"} alt="pokemon image"/>

            <br /><br />

            <form action={`/pokemon/${props.pokemon._id}?_method=DELETE`} method="POST">
                <button>DELETE</button>
            </form>


        <a href={`/pokemon/${props.pokemon._id}/edit`}>Edit</a>

            <a href="/pokemon">Back</a>
        </div>
    )
}

export default Show;


//npm i method-override