import React from "react";
import styled from "styled-components";

const Card = () => {
	return (
		<StyledWrapper>
			<div className="container scroll-1 ">
				<div className="card flex w-12">
					<img src="src/assets/image 2volei.svg" alt="" className="photo " />

					<div className="card__content">
						<span className="card__title">Nome Quadra</span>
						<p className="card__describe flex gap-1">
							<img src="src/assets/pointer.svg" alt="" className="pointerMap" />
							2 km de distância
						</p>
					</div>
				</div>
				<div className="card flex">
					<img src="src/assets/image 1volei.svg" alt="" className="photo" />

					<div className="card__content">
						<span className="card__title">Nome Quadra</span>
						<p className="card__describe flex gap-1">
							<img src="src/assets/pointer.svg" alt="" className="pointerMap" />
							2 km de distância
						</p>
					</div>
				</div>
				<div className="card flex">
					<img src="src/assets/image 1volei.svg" alt="" className="photo" />

					<div className="card__content">
						<span className="card__title">Nome Quadra</span>
						<p className="card__describe flex gap-1">
							<img src="src/assets/pointer.svg" alt="" className="pointerMap" />
							2 km de distância
						</p>
					</div>
				</div>
			</div>
		</StyledWrapper>
	);
};

const StyledWrapper = styled.div`
  .scroll-1::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  .scroll-1::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background: #888;
  }

  .container * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    color: #fff;
  }

  .container {
    display: flex;
    overflow-x: scroll;
    padding: 24px;
    width: 340px;
    height:150px;
    scroll-snap-type: x mandatory;
    scroll-padding-top: 24px;
    border-radius: 8px;
    gap: 20px;
   
   

    
  }

  .container .card {
    flex: 0 0 90%;
    overflow: hidden;
    border-radius: 20px;
    background-color: white;
    scroll-snap-align: start;
    padding-left:15px;
    box-shadow:0px 0px 15px rgba(0,0,0,0.09)
  }



  .card:nth-child(1) .card__image {
    background-image: linear-gradient(
        to right top,
        #051937, 
        #004d7a, 
        #008793, 
        #00bf72, 
        #a8eb12
    );
    
  }

  .card:nth-child(2) .card__image {
    background-image: linear-gradient(
      to right top, 
      #dc09a5, 
      #ce00b4, 
      #ba00c5, 
      #9c00d8, 
      #6f12eb
    );
  }

  .card:nth-child(3) .card__image {
    background-image: linear-gradient(
      to right top, 
      #dc1009, 
      #e55f00, 
      #e49200, 
      #dac000, 
      #c7eb12
    );
  }

  .card .card__content {
  
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 20px;
      

  }

.photo{
 
  border-radius:20%;
  margin-top:12px;
  margin-bottom:12px;
  
  
   
}

  .card .card__content .card__title {
  
    font-size:18px;
    color: black;
    text-transform: capitalize;
    font-weight:600
  }

  .card .card__content .card__describe {
    color:gray;
    font-size: 14px;
    
  }`;

export default Card;
