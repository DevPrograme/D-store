import React from "react";
import Link from "next/link";
import { BsFillBagXFill } from 'react-icons/bs';

const Canceled = () => {

    return (
        <div className="success-wrapper">
            <div className="success">
                <p className="icon">
                    <BsFillBagXFill />
                </p>
                <h2>We are sorry. Somethig wrong happened</h2>
                <p className="email-msg">Mail us for the Issue at</p>
                    <a className="email" href="mailto:order@example.com">
                        order@example.com
                    </a>
                <Link href="/">
                    <button type="button" width="300px" className="btn">
                        Continue Shopping    
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Canceled