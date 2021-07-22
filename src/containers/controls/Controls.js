import React from 'react';
import EnableAudio from "../../components/enableAudio/EnableAudio";
import EnableVideo from "../../components/enableVideo/EnableVideo";
import MakeCall from "../../components/makeCall/MakeCall";
import EndCall from "../../components/endCall/EndCall";

const Controls = () => {
    return (
        <div>
            <EnableAudio />
            <EnableVideo />
            <MakeCall />
            <EndCall />
        </div>
    );
}

export default Controls;
