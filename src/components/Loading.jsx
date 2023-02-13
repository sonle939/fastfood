import { useState, CSSProperties } from "react";
import { RingLoader } from "react-spinners";
import ClipLoader from "react-spinners/ClipLoader";
function Loading() {
    return (
        <div className="loading">
            <RingLoader color="#000" />
            <h3>Loading...</h3>
        </div>
    )
}

export default Loading