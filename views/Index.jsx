import React from 'react'

function Index(props) {

    const myStyle = {
        color: '#FF5733',
        backgroundColor: '#000000',
        };

    return (
     <div style={myStyle}>
            <h1>See All The Pokemon!</h1>
            <ul>
                {props.pokemon.map((pokemon, index) => 
                    <li>
                        <a href={`/pokemon/${pokemon._id}`}><strong>{pokemon.name}</strong></a>
                    </li>
                )}
            </ul>
            <a href="/pokemon/new">Add...</a>
                <form action="/pokemon/clear?_method=DELETE" method="POST">

                    <button>CLEAR</button>
                    </form>




        </div>
    )
}

export default Index