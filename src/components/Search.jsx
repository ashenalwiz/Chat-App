import React from "react";

const Search = () => {
    return (
        <div className="search"> 
            <div className="searchForm">
                <input type ='text' placeholder="Find Chat"/>
            </div>
        
            <div className="userChat">
                <img src='https://th-thumbnailer.cdn-si-edu.com/691Edy2BlBcFgj-aGpttdV3s0ko=/fit-in/1200x0/filters:focal(792x601:793x602)/https%3A%2F%2Ftf-cmsv2-smithsonianmag-media.s3.amazonaws.com%2Ffiler%2F52%2Fe4%2F52e44474-c2dc-41e0-bb77-42a904695196%2Fthis-image-shows-a-portrait-of-dragon-man-credit-chuang-zhao_web.jpg' alt=""/>
                <div className="userChatInfo">
                    <span>John Doe</span>
                </div>

            </div>
        </div>
    )


}

export default Search