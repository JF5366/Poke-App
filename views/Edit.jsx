import React from 'react'
//import DefaultLayout from '../layouts/DefaultLayout';

function Edit(props) { 
    return ( 
    // <DefaultLayout title="Edit View">
        <div>
            <h1>Edit Pokemon</h1>
            <form action={`/pokemon/${props.pokemon._id}?_method=PUT`} method="POST">
                <label htmlFor="nme">Name:</label><br />
                <input type="text" id="nme" name="name" defaultValue={props.pokemon.name}/><br /><br />

                <label htmlFor="imge">Image:</label><br />
                <input type="text" id="imge" name="img" defaultValue={props.pokemon.img}/><br /><br />

               
                <input type="submit"/>
            </form>
        </div>
   //  </DefaultLayout>
        

    );
}
    

export default Edit