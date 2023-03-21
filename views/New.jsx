import React from 'react'
// import DefaultLayout from '../layouts/DefaultLayout';

function New() {
    return ( 
       // <DefaultLayout>
            <div>
            <h1>New Pokemon Log</h1>
            <form action="/pokemon" method="POST">
                <label htmlFor="nme">Name:</label><br />
                <input type="text" id="nme" name="name" /><br /><br />

                <label htmlFor="imge">Image:</label><br />
                <input type="text" id="imge" name="img" /><br /><br />

                <input type="submit"/>
            </form>
        </div>
       // </DefaultLayout>
    );
}

export default New;