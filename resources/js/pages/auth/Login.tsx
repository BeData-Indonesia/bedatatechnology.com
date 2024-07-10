import Button from "../../components/atoms/Button/Button";

import Input from "../../components/molecules/Input/Input";

import { Head, Link } from "@inertiajs/inertia-react";
import * as React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import route from "ziggy";
import { Inertia } from "@inertiajs/inertia";
import Layout from "resources/js/components/organism/Layout/Layout";
import Topic from "resources/js/components/molecules/Topic/Topic";

export default function Login({ status, canResetPassword }) {
    const schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().required(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schema),
    });

    React.useEffect(() => {
        return () => {
            reset({ password: "" });
        };
    }, []);

    const submit = (data) => {
        console.log(data);
        Inertia.post("login", data);
    };

    return (
        <div className="px-5 py-3 lg:px-24 lg:py-16 flex flex-col gap-16 font-poppins">
            <Head title="Login" />

            <form onSubmit={handleSubmit(submit)} className="w-96 size-fit self-center px-8 pt-5 pb-12 border-0 rounded-xl border-[#1d6353] shadow-md">
                <Topic title="Login" textAlign="center" className="mt-4"/>
                <div className="mt-6">
                    <Input
                        error={errors.email}
                        label="Email"
                        register={register}
                        type="email"
                        name="email"
                    />
                </div>

                <div className="mt-6">
                    <Input
                        type="password"
                        name="password"
                        error={errors.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        label="Password"
                        register={register}
                    />
                </div>

                <div className="mt-10">
                    <Button className= "w-full" size="md">Login</Button>
                </div>
            </form>
        </div>
    );
}
