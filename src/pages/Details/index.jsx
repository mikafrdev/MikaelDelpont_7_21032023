import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Details() {
    const { id } = useParams() 
    return (
        <nav>
            <Link to="/">Details {id}</Link>
        </nav>
    )
}