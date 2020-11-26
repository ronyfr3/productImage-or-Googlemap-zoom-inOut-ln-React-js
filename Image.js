//npm install --save react-zoom-pan-pinch
import React from "react";
 
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
 
export default function Images(){
    return (
      <TransformWrapper>
        <TransformComponent>
          <img src="https://th.bing.com/th/id/OIP.xgJci17fBJ9Tj24Y5zg4PwHaFH?pid=Api&w=627&h=433&rs=1" alt="test" />
        </TransformComponent>
      </TransformWrapper>
    );
  }