import React from "react";
import BtnAvancar from "../../components/BtnAvancar/BtnAvancar";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import APIMap from "../../components/APImap/APIMAp";


function CourtSelected() {
	return (
		<StyledWrapper>
      <APIMap />
			<div className="flex justify-center ">
			

				<div className="fixed bottom-0  container scroll-1 ">
					<div className="card flex">
						<img src="src/assets/image 2volei.svg" alt="" className="photo" />

						<div className="card__content">
							<span className="card__title">Nome Quadra</span>
							<p className="card__describe flex gap-1">
								<img
									src="src/assets/pointer.svg"
									alt=""
									className="pointerMap"
								/>
								2 km de distância
							</p>
						</div>
					</div>
				</div>
				<div className=" flex fixed">
					<NavLink to="/Details">
						<BtnAvancar />
					</NavLink>
				</div>
			</div>
		</StyledWrapper>
	);
}

const StyledWrapper = styled.div`


  .container {
    display: flex;
    
    padding: 24px;
    width: 440px;
    height:240px;
  
    border-radius: 8px;
   
   position:fixed;
   bottom:90px

   

    
  }

  .container .card {
    flex: 0 0 100%;
   
    border-radius: 20px;
    background-color: white;
    
    padding-left:15px;
    box-shadow:0px 0px 15px rgba(0,0,0,0.09)
  }





  
  .card .card__content {
  
    display: flex;
    flex-direction: column;
    
    padding: 20px;
      margin-top:30px;

  }

.photo{
 
  border-radius:20%;
  margin-top:12px;
  margin-bottom:12px;
  
  
   
}

  .card .card__content .card__title {
  
    font-size:22px;
    color: black;
    text-transform: capitalize;
    font-weight:600
  }

  .card .card__content .card__describe {
    color:gray;
    font-size: 16px;
    
  }`;

export default CourtSelected;
