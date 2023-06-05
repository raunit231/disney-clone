
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import SimpleImageSlider from 'react-simple-image-slider';
import './Home.css'
import { Type } from '../components/Type';

function Home() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [sliderImg, setSliderImg] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/movies");

        const res = await response.json();
        setData(res);
        if (response.ok) {
          setIsLoading(false);
        }
      } catch (err) {
        console.log(err.message);
      }

    };
    fetchData();
  }, []);

  useEffect(() => {
    if (!isLoading && data) {
      const imgUrl = data.map(d => d.backgroundImg);
      setSliderImg(imgUrl);
    }
  }, [isLoading, data]);

  console.log(sliderImg);
  return (
    <div className='bg-black'>
      <Header />
      {/* Slider */}
      <div className="home__slider">
        {sliderImg &&
          <SimpleImageSlider
            width="100%"
            height={504}
            images={sliderImg}
            showNavs={true}
            autoPlay={true}
          />}
      </div>
      <div className="flex flex-col">
        {!isLoading &&
          <Type
            title={"Latest and Trending"}
            data={data}
            types={["new","trending"]}
          />
        }
        {!isLoading &&
          <Type
            title={"Recommended for you"}
            data={data}
            types={["recommend"]}
          />
        }
        {!isLoading &&
          <Type
            title={"Disney+ Original"}
            data={data}
            types={["original"]}
          />
        }
      </div>

    </div>
  )
}

export default Home;

