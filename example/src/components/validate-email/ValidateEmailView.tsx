import {useReactRxBindings} from "../../ReactRxBindings";
import React from "react";
import {ValidateEmailViewModel} from "./ValidateEmailViewModel";

export default function ValidateEmailView() {
    let bindings = useReactRxBindings(() => new ValidateEmailViewModel(), undefined);

    return (
        <div>
            <input type="text" value={bindings.rx.email$.value} placeholder="Email" onChange={(e) => bindings.rx.email$.next(e.target.value)} />
            <br />
            <p>Email is {bindings.rx.isValid$.value ? "valid" : "invalid"}</p>
        </div>
    );
}
