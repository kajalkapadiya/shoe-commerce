import axios from "axios";
import { useRef, useState } from "react";
import FetchData from "./FetchData";

const Shoe = (props) => {
  const [userData, setUserData] = useState([]);
  const nameRef = useRef();
  const descRef = useRef();
  const priceRef = useRef();
  const LRef = useRef();
  const MRef = useRef();
  const SRef = useRef();

  const addHandler = async () => {
    const shoeDataForUser = {
      shoeName: nameRef.current.value,
      shoeDesc: descRef.current.value,
      shoePrice: priceRef.current.value,
      sizeL: LRef.current.value,
      sizeM: MRef.current.value,
      sizeS: SRef.current.value,
    };

    await axios.post(
      "https://crudcrud.com/api/22dcdd0d957440f8a1f3de240e23a9d4/shoeData",
      shoeDataForUser
    );

    const frontData = await axios.get(
      "https://crudcrud.com/api/22dcdd0d957440f8a1f3de240e23a9d4/shoeData"
    );
    if (frontData.data.length) {
      setUserData(frontData.data);
    }
  };
  console.log(userData);

  return (
    <>
      <div>
        <label>shoe name</label>
        <input type="text" name="name" ref={nameRef} />
        <label>shoe description</label>
        <input type="text" ref={descRef} />
        <label>shoe price</label>
        <input type="number" ref={priceRef} />
        <label>L</label>
        <input type="text" ref={LRef} />
        <label>M</label>
        <input type="text" ref={MRef} />
        <label>S</label>
        <input type="text" ref={SRef} />
        <button onClick={addHandler}>Add product</button>
      </div>
      <div style={{ right: "2rem", top: "0.5rem", position: "fixed" }}>
        <button onClick={props.showCart}>Cart</button>
      </div>
      <FetchData userData={userData} />
    </>
  );
};

export default Shoe;
