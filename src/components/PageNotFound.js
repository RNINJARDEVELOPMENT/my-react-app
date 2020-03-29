import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function PageNotFound() {
  let loc = useLocation();
  return (
    <div class="m-24">
      <h3>
        Oops.. No match found for
        <code>{loc.pathname}..</code> Goto{" "}
        <Link class="text-teal-500" to="/">
          Home
        </Link>
      </h3>
    </div>
  );
}
