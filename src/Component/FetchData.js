const FetchData = (props) => {
  let order = () => {
    console.log(props.userData.index);
  };

  return (
    <>
      {props.userData.map((res, index) => {
        const { shoeName, shoeDesc, shoePrice, sizeL, sizeM, sizeS } = res;
        return (
          <div key={index}>
            <div>
              <p>{`product details: ${shoeName} - ${shoeDesc} - ${shoePrice} - ${sizeL} - ${sizeM} - ${sizeS}`}</p>

              <button onClick={order} ref={props.event}>
                add to cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FetchData;
