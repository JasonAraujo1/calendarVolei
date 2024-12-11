import React from "react";
import styled from "styled-components";

const Caroulsel = () => {
	return (
		<StyledWrapper>
			<div className="container scroll-1">
				<div className="card shadow-[0px_0px_15px_rgba(0,0,0,0.09)] ">
					<i class="bi bi-bookmark-plus-fill" />
					<div />
					<img
						src="src/assets/image 2volei.svg"
						alt=""
					/>
					<div className="card__content">
						<span className="card__title">Quadra Teste</span>
						<p className="card__describe">
							<img src="src/assets/pointer.svg" alt="" />
							Lorem ipsum
							<span className="card__Score">
								<img src="src/assets/star.svg" alt="" />
								4.8
							</span>
						</p>
					</div>
				</div>
				<div className="card shadow-[0px_0px_15px_rgba(0,0,0,0.09)]">
					<i class="bi bi-bookmark-plus-fill" />
					<div />
					<img
						className="card__image"
						src="src/assets/image 1volei.svg"
						alt=""
					/>
					<div className="card__content">
						<span className="card__title">Quadra Teste</span>
						<p className="card__describe">
							<img src="src/assets/pointer.svg" alt="" />
							Lorem ipsum
							<span className="card__Score">
								<img src="src/assets/star.svg" alt="" />
								4.8
							</span>
						</p>
					</div>
				</div>
				<div className="card shadow-[0px_0px_15px_rgba(0,0,0,0.09)]">
					<i class="bi bi-bookmark-plus-fill" />
					<div />
					<img
						className="card__image"
						src="src/assets/image 3volei.jfif"
						alt=""
					/>
					<div className="card__content">
						<span className="card__title">Quadra Teste</span>
						<p className="card__describe">
							<img src="src/assets/pointer.svg" alt="" />
							Lorem ipsum
							<span className="card__Score">
								<img src="src/assets/star.svg" alt="" />
								4.8
							</span>
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
   
    ;
  }

  .container {
    display: flex;
    overflow-x: scroll;
    padding: 24px;
    width: 340px;
    scroll-snap-type: x mandatory;
    scroll-padding-top: 24px;
    border-radius: 8px;
    gap: 20px;
  }

  .container .card {
    flex: 0 0 80%;
    overflow: hidden;
    border-radius: 20px;
    
    scroll-snap-align: start;
   
  }

  .card .card__image {
    flex: 1;
    height: 370px;
    width:100%;
    height:100%;

    
  }

  
 .card__image {
   object-fit: cover ;
    
    
    
  }
   .card {
    position:relative;
   
    
  }

    
   .card__content {
    position: absolute;
    
    bottom:0;
    background-color:rgba(29, 29, 29, 0.5);
    display:flex;
    
    margin:20px;
    width:80%;
    border-radius:18px;
   
   
   
    
  }



  .card .card__content .card__title {
    font-size: 15px;
    color: #fff;
    text-transform: capitalize;
  }

  .card .card__content .card__describe {
     display:flex;
    gap:5px;
    color:rgba(202, 200, 200, 1);
    font-size: 12px;
    justify-content: space-between;
  }



  .card__Score{
    display:flex;
    gap:5px;
    color:rgba(202, 200, 200, 1)
  }
 .card__Score img{
    width:12px;
  }

  i{
  position:absolute;
  right:10%;
  top:5%;
  color:rgba(736, 739, 739, 0.8);
  font-size:25px;
 
  
  }
  i.bi.bi-bookmark-plus-fill::before{
  background:rgba(29, 29, 29, 0.4);
  padding:10px;
  border-radius:50%
  
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
    gap: 10px;
    padding: 20px;
  }



  `;

export default Caroulsel;
