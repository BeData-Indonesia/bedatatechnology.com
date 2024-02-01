import Button from "../../components/atoms/Button/Button";

import Input from "../../components/molecules/Input/Input";

import { Head, Link } from "@inertiajs/inertia-react";
import * as React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import route from "ziggy";
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

    const submit = () => {
        route("contact-us");
    };

    return (
        <>
            <Head title="Log in" />

            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <Input
                        error={errors.email}
                        label="Email"
                        register={register}
                        type="email"
                        name="email"
                    />
                </div>

                <div className="mt-4">
                    <Input
                        type="password"
                        name="password"
                        error={errors.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        label="password"
                        register={register}
                    />
                </div>

                <div className="flex items-center justify-end mt-4">
                    {canResetPassword && (
                        <Link
                            href={"password/request"}
                            className="underline text-sm text-gray-600 hover:text-gray-900"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <Button className="ml-4">Log in</Button>
                </div>
            </form>
        </>
    );
}
