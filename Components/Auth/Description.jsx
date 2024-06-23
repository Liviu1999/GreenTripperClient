import { useState } from "react";
import "./Login.css";
import { IconContext } from "react-icons";
import { PiParallelogramBold } from "react-icons/pi";
function Description() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleRadioChange = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="container-description">
      <div className="container-logo">
        <IconContext.Provider value={{ size: "2.5rem" }}>
          <PiParallelogramBold className="logo" />
        </IconContext.Provider>
        <p id="logo-name">Nextgen</p>
      </div>
      <div className="carrousel">
        <ul style={{ transform: `translateX(-${currentIndex * 593}px)` }}>
          <li>
            <h1>Efficient Prospect to Customer Conversion Strategies.</h1>
            <p className="p-opacity">
              Provide a complimentary trial or demonstration of your product or
              service, enablign the customer to experience it firsthand.
            </p>
          </li>
          <li>
            <h1>Lorem ipsum dolor sit amet consectetur.</h1>
            <p className="p-opacity">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              mollitia cupiditate delectus, voluptatum voluptas quas!
            </p>
          </li>
          <li>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, vel?
            </h1>
            <p className="p-opacity">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              consequuntur, asperiores facere nisi laborum animi voluptatem esse
              dignissimos explicabo illo culpa eius nesciunt, ducimus fuga?
            </p>
          </li>
        </ul>
      </div>
      <form>
        <input
          type="radio"
          name=""
          id=""
          checked={currentIndex === 0}
          onChange={() => handleRadioChange(0)}
        />
        <input
          type="radio"
          name=""
          id=""
          checked={currentIndex === 1}
          onChange={() => handleRadioChange(1)}
        />
        <input
          type="radio"
          name=""
          id=""
          checked={currentIndex === 2}
          onChange={() => handleRadioChange(2)}
        />
      </form>
    </div>
  );
}

export default Description;
