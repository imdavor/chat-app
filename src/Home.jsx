import React from "react";
import Sidebar from "../src/components/Sidebar";
import Chat from "../src/components/Chat";

export const Home = () => {
    return (
        <div>
            <div className='home'>
                <div className='container'>
                    <Sidebar />
                    <Chat />
                </div>
            </div>
        </div>
    );
};
