import React from "react";

const IndianTeam = [
    "Sachin",
    "Dhoni",
    "Virat",
    "Rohit",
    "Yuvraj",
    "Raina",
];

// Odd Players
export function OddPlayers(props) {
    const [first, , third, , fifth] = props.IndianTeam;

    return (
        <div>
            <ul>
                <li>First : {first}</li>
                <li>Third : {third}</li>
                <li>Fifth : {fifth}</li>
            </ul>
        </div>
    );
}

// Even Players
export function EvenPlayers(props) {
    const [, second, , fourth, , sixth] = props.IndianTeam;

    return (
        <div>
            <ul>
                <li>Second : {second}</li>
                <li>Fourth : {fourth}</li>
                <li>Sixth : {sixth}</li>
            </ul>
        </div>
    );
}

// Merge Arrays
const T20Players = [
    "Mr. First Player",
    "Mr. Second Player",
    "Mr. Third Player",
];

const RanjiPlayers = [
    "Mr. Fourth Player",
    "Mr. Fifth Player",
    "Mr. Sixth Player",
];

export const IndianPlayers = [...T20Players, ...RanjiPlayers];

export function ListofIndianPlayers(props) {
    return (
        <div>
            <ul>
                {props.IndianPlayers.map((player, index) => (
                    <li key={index}>{player}</li>
                ))}
            </ul>
        </div>
    );
}

export default IndianTeam;