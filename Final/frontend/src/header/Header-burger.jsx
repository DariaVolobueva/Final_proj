import React from "react";

export function Burger() {
    return (
            <div className="burger">
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20" fill="#274C5B"></rect>
                    <rect y="30" width="100" height="20" fill="#274C5B"></rect>
                    <rect y="60" width="100" height="20" fill="#274C5B"></rect>
                </svg>
            </div>
    );
  }