import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();

    console.log(error);

    return (
        <div className="my-24 flex w-full flex-col items-center justify-center">
            <h1 className="from-primary-purples-acai to-primary-main m-0 bg-gradient-to-r bg-clip-text p-0 text-9xl text-transparent" />
            <h2 className="from-primary-purples-acai to-primary-main mt-1 bg-gradient-to-r bg-clip-text text-xl font-normal text-transparent" />
        </div>
    );
};

export default ErrorPage;
