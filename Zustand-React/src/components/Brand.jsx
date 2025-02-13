import React, {useEffect, useState} from 'react';
import myBrandList from "../stors/BrandList.js"

const Brand = () => {

    let {brands, brandReq}= myBrandList()




    useEffect(() => {
        (
            async ()=>{
                await brandReq();

            }
        )()

    }, []);






    return (
        <div className="container">

            <ol>



                {
                  brands!==null && brands.map((item, index) => (
                      <li key={index}>
                          {item.brandName}
                      </li>
                    ))
                }
            </ol>


        </div>
    );
};

export default Brand;