import React from "react";
import { Slider } from "antd";

function RangeSlider({ minPrice, maxPrice, range, onSliderChange }) {
    return (
        <div>
            <Slider
                range
                value={[minPrice, maxPrice]} // Bind slider values to state
                onChange={onSliderChange} // Update state when slider moves
                min={range.min} // Minimum value for the slider
                max={range.max} // Maximum value for the slider
                step={5000} // Step for the slider, e.g., increment by 5000
            />
        </div>
    );
}

export default RangeSlider;
