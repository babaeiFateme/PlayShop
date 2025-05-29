import Button from "@/components/atoms/Button/Button";
import TextInput from "@/components/atoms/TextInput/TextInput";
import React from "react";

const Subscribe = () => {
    return (
        <div className="w-full md:w-fit lg:flex gap-5 items-center justify-between lg:*:basis-1/2 bg-black text-white rounded-none lg:rounded-lg p-4 lg:p-6 absolute left-1/2 top-0 transform -translate-y-1/2 -translate-x-1/2">
            <div className="mb-4 lg:mb-0 uppercase text-lg lg:text-2xl font-bold">STAY UPTO DATE ABOUT OUR LATEST OFFERS</div>
            <div className="">
                <TextInput name="subscribe" type="text" className='!bg-white !rounded-2xl placeholder:font-semibold' placeholder='Enter your email address' />

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
