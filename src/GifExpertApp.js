import React, { Fragment, useState } from 'react'
import {AddCategory} from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
const GifExpertApp = () =>{


    const [categories, setCategories] = useState(['One Punch']);

    // const handleAdd = (e) =>{
    //     // setCategories([...categories, 'epa']);
    //     setCategories(cats => [...cats, 'epa']);
    // };

    return( 
        <Fragment>
            <h2>GifExpertApp</h2>
            <hr />

            <AddCategory setCategories={setCategories} />            
            <ol>
                { categories.map(category =>{return <GifGrid 
                                                        key={category}
                                                        category= {category}
                                                        />}) }
            </ol>
        </Fragment>
    );
};

export default GifExpertApp;