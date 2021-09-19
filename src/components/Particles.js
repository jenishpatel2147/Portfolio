import React from "react";
import Particles from "react-particles-js"
import styled from "styled-components"

const HeaderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0vh;
`;

const Background = () => {
return (
	<HeaderWrapper>
    <Particles
        params={{
	    "particles": {
	        "number": {
	            "value": 15
	        },
	        "size": {
	            "value": 2.5
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	    }} />
		</HeaderWrapper>
    )
}

export default Background;