import { ReactNode } from "react";
import * as React from "react";
import { cn } from "../../../lib/utils";

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: ReactNode;
    visibilityModal: boolean;
    openModal: () => any;
    closeModal: () => any;
}

// export const modalVariants = cva("absolute top-1/2 left-1/2 bg-white -translate-x-1/2 -translate-y-1/2 rounded-xl max-w-[600px] min-w-[300px] transition-all duration-[400ms]", {
//   variants: {},
//   defaultVariants: {},
// });

const Modal: React.FC<ModalProps> = ({
    children,
    visibilityModal,
    openModal,
    closeModal,
    ...props
}) => {
    return (
        <div className="z-50">
            <div
                className={cn(
                    "w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed transition-all duration-[400ms]",
                    !visibilityModal && " hidden"
                )}
            >
                <div
                    onClick={closeModal}
                    className={`w-[100vw] h-[100vh] top-0 left-0 right-0 bottom-0 fixed transition-colors duration-[400ms] bg-[rgba(49,49,49,0.8)]`}
                ></div>
                <div className="absolute top-1/2 left-1/2 bg-white -translate-x-1/2 -translate-y-1/2 rounded-xl max-w-[600px] min-w-[300px] transition-all duration-[400ms]">
                    <div className=" border-[#e3e3e3] px-6 py-5 text-base text-[#151A1E]">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
