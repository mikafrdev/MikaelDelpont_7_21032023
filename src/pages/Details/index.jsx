import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Details() {
    const { id } = useParams() 
    return (
        <div>
            <Link to="/">Details {id}</Link>
        </div>
    )
}