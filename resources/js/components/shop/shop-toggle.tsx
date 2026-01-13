import React from 'react'

export default function ShopToggle() {
    return (
        <div>
            <label htmlFor="hs-basic-usage" className="relative inline-block w-9 h-5 cursor-pointer">
                <input type="checkbox" id="hs-basic-usage" className="peer sr-only" defaultChecked />
                <span className="absolute inset-0 bg-gray-200 rounded-full transition-colors duration-200 ease-in-out peer-checked:bg-primary-normal dark:bg-neutral-700 dark:peer-checked:bg-blue-500 peer-disabled:opacity-50 peer-disabled:pointer-events-none"></span>
                <span className="absolute top-1/2 start-0.5 -translate-y-1/2 size-4 bg-white rounded-full shadow-md transition-transform duration-200 ease-in-out peer-checked:translate-x-full dark:bg-neutral-400 dark:peer-checked:bg-white"></span>
            </label>

        </div>
    )
}
