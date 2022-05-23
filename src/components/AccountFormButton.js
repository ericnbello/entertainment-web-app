import React from "react";

export default function AccountFormButton({buttonText, handleAction}) {
    return (
        <button className="w-full px-6 py-3 bg-red text-white rounded-lg hover:bg-white hover:text-darkBluehover:bg-white hover:text-darkBlue"
        onClick={handleAction}>
        {/* type="submit" > */}
            {buttonText}
        </button>
    )
}