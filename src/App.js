import { useState, useEffect } from 'react';
import './App.css';
import quote from './quote.jpg'


function App() {
  const dataList = [{id:1,name:'Susan Smith',job:'web developer',image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',text:"I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",},{id:2,name:'Anna Johnson',job:'web designer',image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg',text:'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',},{id:3,name:'Peter Jones',job:'intern',image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',text:'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',},{id:4,name:'Bill Anderson',job:'the boss',image:'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',text:'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',},]
  
  const body = document.body;
    const [currentProfile, setCurrentProfile] = useState(0);
  
  body.addEventListener('keydown', function(event){
    if(event.key === "ArrowRight"){
      handleNextClick()
    }
    if(event.key === "ArrowLeft"){
      handlePreviousClick()
    }
  })
    
    const handleSurpriseMe = () => {
      setCurrentProfile(Math.floor(Math.random() * dataList.length))
    }

    const handlePreviousClick = () => {
      setCurrentProfile(currentProfile === 0 ? dataList.length - 1 : currentProfile - 1);
    };
  
    const handleNextClick = () => {
      setCurrentProfile(currentProfile === dataList.length - 1 ? 0 : currentProfile + 1);
    };


    let currentProfileShowing = dataList[currentProfile]
    return (
      <div className='App'>
        <div className='container'> 
    
            <div className="profile-card">
              <div>
              <h5>"</h5>
              <img src={currentProfileShowing.image} alt={currentProfileShowing.name} />
              </div>
              <h2>{currentProfileShowing.name}</h2>
              <h3>{currentProfileShowing.job}</h3>
              <p>{currentProfileShowing.text}</p>
            </div>
        <div className='selection-div'>
          <div>
            <button onClick={handlePreviousClick}>{'<'}</button>
            <button onClick={handleNextClick}>{'>'}</button>
          </div>
          <button className='surprise-button' onClick={handleSurpriseMe}>Surprise Me</button>
        </div>
        </div>
      </div>
      );
}
export default App;

