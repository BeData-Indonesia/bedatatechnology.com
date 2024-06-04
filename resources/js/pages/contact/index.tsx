import Layout from "../../components/organism/Layout/Layout";
import Topic from "../../components/molecules/Topic/Topic";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "../../components/atoms/Button/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/molecules/Input/Input";
import IllustrationContactUs from "../../assets/ILUSTRATION.png";
import IllustrationContactUsSmall from "../../assets/ILUSTRATION-small.png";
import Modal from "../../components/organism/Modal/Modal";
import Typography from "../../components/atoms/Typography/Typography";
import { useModal } from "../../hooks/useModal";

import { useRef, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import ImageLoader from "../../components/atoms/ImageLoader/ImageLoader";
import { isScreenLG } from "../../lib/utils";
import * as React from "react";
import { Inertia } from "@inertiajs/inertia";

export default function ContactUs(props) {
    type TDataInquiry = {
        email: string;
        name: string;
        company: string;
        inquiry: string;
    };
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        name: yup.string().required(),
        company: yup.string().required(),
        inquiry: yup.string().min(8).max(200).required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        getValues,
        getFieldState,
    } = useForm({
        resolver: yupResolver(schema),
    });

    const { visibilityModal, openModal, closeModal, handleOk } = useModal();

    useEffect(() => {
        reset();
    }, []);

    const onSubmitHandler = async () => {
        await Inertia.post("contact-us", getValues());
    };

    const toastId = useRef<any>("null");

    return (
        <Layout>
            <div className=" md:grid md:grid-cols-5 flex flex-wrap-reverse justify-center">
                <section className=" col-span-2">
                    <Topic title="Get In Touch" textAlign="left">
                        Please fill in the fields below, we will contact you as
                        soon as possible.
                    </Topic>
                    <div className=" mt-8">
                        <form className="" onSubmit={onSubmitHandler}>
                            <div className=" mb-4 flex flex-col gap-2 ">
                                <Input
                                    error={errors.email}
                                    label="Email"
                                    register={register}
                                    type="email"
                                    name="email"
                                />
                                <Input
                                    error={errors.name}
                                    label="Name"
                                    register={register}
                                    type="text"
                                    name="name"
                                />
                                <Input
                                    error={errors.company}
                                    label="Company"
                                    register={register}
                                    type="text"
                                    name="company"
                                />
                                <Input
                                    error={errors.inquiry}
                                    label="Inquiry"
                                    register={register}
                                    type="text-area"
                                    name="inquiry"
                                />
                            </div>
                            <div className=" flex justify-end">
                                <Button
                                    type="submit"
                                    size="md"
                                    className=" rounded-md"
                                >
                                    Send
                                </Button>
                            </div>
                        </form>
                    </div>
                </section>
                <section className=" col-span-3 flex justify-center items-center w-[282px] md:w-full">
                    <ImageLoader
                        imageUrl={IllustrationContactUs}
                        imageSmallUrl={IllustrationContactUsSmall}
                        alt="contact bedata"
                        width={(isScreenLG && 650) || 150}
                        height={(isScreenLG && 650) || 150}
                    />
                </section>
                <Modal
                    closeModal={closeModal}
                    openModal={openModal}
                    visibilityModal={visibilityModal}
                >
                    <div className=" flex items-center flex-col">
                        <Typography variant="h4" fontWeight="bold">
                            Success!
                        </Typography>
                        <div className=" mt-1 mb-2 flex-col flex items-center">
                            <Typography variant="p12">Thankyou! !</Typography>
                            <Typography variant="p12">
                                We will be in touch shortly!
                            </Typography>
                        </div>
                        <Button
                            onClick={() => {
                                handleOk(() => "");
                            }}
                        >
                            Okay
                        </Button>
                    </div>
                </Modal>
            </div>
            <ToastContainer />
        </Layout>
    );
}
