import { Button } from "@mui/material";
import React from "react";

const Subscribe = () => {
    return (
        <div className="flex gap-2 items-center justify-between *:basis-1/2 bg-black text-white rounded-lg p-2 lg:p-6 absolute left-1/2 top-0 transform -translate-y-1/2 -translate-x-1/2">
            <div className="uppercase text-md lg:text-2xl font-bold">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
            <div className="">
                <input type="text" />
                <Button variant="contained">Subscribe to Newsletter</Button>
            </div>
        </div>
    );
};

export default Subscribe;
