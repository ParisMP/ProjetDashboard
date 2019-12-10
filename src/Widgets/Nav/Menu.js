import React from "react";

export default ({ close }) => (
    <div className="menu">
        <ul>
            <li onClick={close}>Wigdets</li>
            <li onClick={close}>Page Admin</li>
        </ul>
    </div>
);