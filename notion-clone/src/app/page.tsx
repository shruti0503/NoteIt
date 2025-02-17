'use client'
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import Checkboxes from "@/components/ui/checkboxes";
import { Button } from "@/components/ui/button";

export default function Home() {
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);

    // Function to delay execution
    const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

    // Function to update checkboxes one by one
    const Checks = async () => {
        await DisplayChecks(setShow1);
        //await wait(1000);
        await DisplayChecks(setShow2);
        //await wait(1000);
        await DisplayChecks(setShow3);
        //await wait(1000);
        await DisplayChecks(setShow4);
    };

    // Modified DisplayChecks to return a Promise
    const DisplayChecks = (setFunction: React.Dispatch<React.SetStateAction<boolean>>) => {
        return new Promise<void>((resolve) => {
            setTimeout(() => {
                setFunction(true);
                resolve();
            }, 1000);
        });
    };

    useEffect(() => {
        Checks();
    }, []);

    return (
        <div className="bg-white text-black flex flex-col w-full h-[100vh]">
            <TopBar />
            <div className="flex w-full h-full">
                <div className="flex h-full w-full flex-col gap-4 bottom-32 justify-center relative items-start" style={{zIndex:"1"}}>
                    <h1 className="text-6xl font-bold ps-10 ">The happier workplace</h1>
                    <p className="ps-11 font-bold ">Plan. Create. Move</p>

                    <div className="flex w-full gap-2 justify-start ps-10">
                      <Button className="bg-blue-400 text-white font-bold hover:bg-blue-500 px-8">LogIn</Button>
                      <Button className="bg-blue-700 text-white font-bold hover:bg-blue-800 px-8">SignUp</Button>
                    </div>
                </div>
                <img src="/laptop.png"  className=" pe-10 border-none absolute mt-48 ml-32 w-[40%]" style={{zIndex:"0", opacity:"40%"}} />
                <div className="flex  h-full w-full justify-around  items-center  gap-2">
                  <div className="flex flex-col gap-1 relative" style={{zIndex:"1"}}>
                    <Checkboxes show={show1} />
                    <Checkboxes show={show2} />
                    <Checkboxes show={show3} />
                    <Checkboxes show={show4} />
                  </div>
        
                  <div className=" w-full h-full flex items-center justify-center">
                   <img src="/man.png"  className="w-[50%] pe-10 border-none relative" style={{zIndex:"1"}} />

                  </div>
                   
                </div>
            </div>
        </div>
    );
}
