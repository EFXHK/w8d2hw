import React, {useState, useEffect } from "react";




const StoryContainer = () => {

    const [stories, setStories] = useState( [] )
    const [selectedStory, setSelectedStory] = useState(null)

    useEffect( () => {
        fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(res => res.json())
        .then((data) => {
            
        const promises = data.map((id) => {
            return fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
            .then(res => res.json())
        })
            Promise.all(promises)
            .then((data) => {
                setStories(data);
            })

            
    })            
    }, [])


    // .then((data) => {
    //     setStories(data);
    // })
    return (
        <div>
        <h1>Stories</h1>
        <p>{stories[0].title}</p>
        </div>
)
}
export default StoryContainer