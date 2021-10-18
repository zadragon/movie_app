import React from 'react';
import propTypes from 'prop-types';


function Dogs({name, image, rating}){
    return(
            <div><p>{name}</p><p>{rating}:5</p><p><img src={image} alt=""/></p> </div>
    )
}

const dogILike = [
    {
        id:1,
        name:"vishong",
        image:"https://www.moneynet.co.kr/files/attach/images/33793530/352/504/035/0bdcbc3b597247038933b1762bfab4e2.jpg",
        rating:4
    },
    {
        id:2,
        name:"yorkShor",
        image:"https://m.kroomize.com/file_data/kroomize/2018/05/23/dc7449a29d8d918c0454b8e6d108bef9.jpg",
        rating:4
    },
    {
        id:3,
        name:"Dachshund",
        image: "http://www.civilreporter.co.kr/news/photo/201602/24105_24209_3645.jpg",
        rating:3
    },
    {
        id:4,
        name: "martiz",
        image: "https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbEP4XI%2FbtqC6ltW2tQ%2FRw8RGmfI1MSxZQ9iUg5aNk%2Fimg.jpg",
        rating:2,
    },
    {
        id:5,
        name:"wellsikogi",
        image: "https://cdn.onews.tv/news/photo/202108/86366_92057_597.jpg",
        rating:1
    }
]



dogILike.propTypes = {
    name : propTypes.string.isRequired,
    image : propTypes.string.isRequired,
    rating : propTypes.string.isRequired

}

function App() {
  return (
    <div className="App">
        {dogILike.map((item)=>{
            return (
                <Dogs key={item.id} name={item.name} image={item.image} rating={item.rating} />
            )
        })}
    </div>
  );
}

export default App;
