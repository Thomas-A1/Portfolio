import React from 'react';

function Divider() {
    return (
        <div className="relative py-12">
            <div
                className="absolute inset-0 flex items-center"
                aria-hidden="true"
            >
                <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center">
                <div className="bg-white px-4">
                    <span className="text-lg text-gray-500">•••</span>
                </div>
            </div>
        </div>
    );
}

export default Divider;
