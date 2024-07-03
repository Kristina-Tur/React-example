import {useEffect, useState} from "react";
import * as React from "react";
import {Clock} from "./Clock";
import {ClockWithArrow} from "./ClockWithArrow";

export default {
    title: 'ClockStories'
}


export const ClockStories = () => {
    return <Clock/>
}
export const ClockWithArrowsStories = () => {
    return <ClockWithArrow/>
}