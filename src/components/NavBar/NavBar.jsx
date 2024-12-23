import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Radio = () => {
	return (
		<StyledWrapper>
			<div id="navbody" >
				<form action="#">
					<ul className="ul">
						<input
							defaultChecked
							name="rad"
							className="radio"
							id="choose1"
							type="radio"
						/>
						<label htmlFor="choose1">
							<nav>
								<NavLink to="/">
									<li className="li">
										<svg
											viewBox="0 0 24 24"
											fill="none"
											height={24}
											width={24}
											xmlns="http://www.w3.org/2000/svg"
											aria-hidden="true"
											className="svg w-6 h-6 text-gray-800 dark:text-white"
										>
											<path
												d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
												strokeWidth={2}
												strokeLinejoin="round"
												strokeLinecap="round"
												stroke="currentColor"
											/>
										</svg>
									</li>
								</NavLink>
							</nav>
						</label>
						<input className="radio" name="rad" id="choose2" type="radio" />
						<label htmlFor="choose2">
							<li className="li">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									height={24}
									width={24}
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									className="svg w-6 h-6 text-gray-800 dark:text-white"
								>
									<path
										d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
										strokeWidth={2}
										strokeLinecap="round"
										stroke="currentColor"
									/>
								</svg>
							</li>
						</label>
						<input className="radio" name="rad" id="choose3" type="radio" />
						<label htmlFor="choose3">
							<li className="li">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									height={24}
									width={24}
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									className="svg w-6 h-6 text-gray-800 dark:text-white"
								>
									<path
										d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"
										strokeWidth={2}
										strokeLinejoin="round"
										strokeLinecap="round"
										stroke="currentColor"
									/>
								</svg>
							</li>
						</label>
						<input className="radio" name="rad" id="choose4" type="radio" />
						<label htmlFor="choose4">
							<li className="li">
								<svg
									viewBox="0 0 24 24"
									fill="none"
									height={24}
									width={24}
									xmlns="http://www.w3.org/2000/svg"
									aria-hidden="true"
									className="svg w-6 h-6 text-gray-800 dark:text-white"
								>
									<path
										d="M10 19H5a1 1 0 0 1-1-1v-1a3 3 0 0 1 3-3h2m10 1a3 3 0 0 1-3 3m3-3a3 3 0 0 0-3-3m3 3h1m-4 3a3 3 0 0 1-3-3m3 3v1m-3-4a3 3 0 0 1 3-3m-3 3h-1m4-3v-1m-2.121 1.879-.707-.707m5.656 5.656-.707-.707m-4.242 0-.707.707m5.656-5.656-.707.707M12 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
										strokeWidth={2}
										strokeLinejoin="round"
										strokeLinecap="square"
										stroke="currentColor"
									/>
								</svg>
							</li>
						</label>
					</ul>
				</form>
			</div>
		</StyledWrapper>
	);
};

const StyledWrapper = styled.div`
  #navbody {
  width: 300px;
  height: 60px;
  background-color: rgb(255, 255, 255);
  box-shadow: 0 8px 15px 0 rgba(0, 0, 0, 0.09);
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
}

.ul {
  list-style: none;
  width: 100%;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
}

.ul .li {
  display: inline-block;
}

.radio {
  display: none;
}

.svg {
  width: 70px;
  height: 70px;
  opacity: 20%;
  cursor: pointer;
  padding: 13px 20px;
  transition: 0.2s;
}

.ul .li .svg:hover {
  transition: 0.1s;
  color: #422f96;
  position: relative;
  margin-top: -4px;
  opacity: 100%;
}

.radio:checked + label .li .svg {
  color: #422f96;
  fill-rule: evenodd;
   opacity: 100%;
}`;

export default Radio;
