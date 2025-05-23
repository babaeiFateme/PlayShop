import Button from "@/components/atoms/Button/Button";
import TextInput from "@/components/atoms/TextInput/TextInput";
import React from "react";

const Subscribe = () => {
    return (
        <div className="flex gap-5 items-center justify-between *:basis-1/2 bg-black text-white rounded-lg p-2 lg:p-6 absolute left-1/2 top-0 transform -translate-y-1/2 -translate-x-1/2">
            <div className="uppercase text-md lg:text-2xl font-bold">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
            <div className="">
                <TextInput className='!bg-white !rounded-2xl placeholder:font-semibold' placeholder='Enter your email address' />

                <Button
                    variant="contained"
                    color="inherit"
                    className="w-full !mt-3 !rounded-2xl !py-4 !text-black !bg-white"
                >
                    Subscribe to Newsletter
                </Button>
            </div>
        </div>
    );
};

export default Subscribe;
