import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const data = Array.from({ length: 50 }, (_, i) => `Item ${i + 1}`);

function Pagination() {
    const [currPage, setCurrPage] = useState(1);

    const { data: mydata } = useFetch("https://jsonplaceholder.typicode.com/posts")

    const itemPerpage = 5;

    const totalPage = Math.ceil(mydata.length / itemPerpage);


    const firstInd = (currPage - 1) * itemPerpage;
    const lastind = firstInd + itemPerpage;



    const currentItem = mydata.slice(firstInd, lastind);



    console.log(firstInd,lastind);


    const handlePage = (zdhsbfkjdhsaf) => {
        setCurrPage(zdhsbfkjdhsaf);
    }





    return (
        <div>
            <h3>Pagination Example</h3>
            <ul>
                {currentItem?.map((item) =>
                    <>
                        <li>{item.title}</li>
                        <br />
                    </>
                )}
            </ul>


            <button disabled={currPage==1} onClick={()=>setCurrPage(currPage-1)}>Prev</button>

            {
                [...Array(totalPage)].map((item, index) =>
                    <button  style={{padding:10, marginRight:10,marginBottom:10, background:currPage==index+1?"red":""}} onClick={() => handlePage(index + 1)}>{index + 1}</button>
                )

            }


            <button disabled={currPage==totalPage} onClick={()=>setCurrPage(currPage+1)}>Next</button>



        </div>
    );
}

export default Pagination;
