import { useRouteError } from 'react-router-dom';

type Error =
    | Partial<{
          status: number;
          statusText: string;
      }>
    | undefined
    | null;

const ErrorPage = () => {
    const error = useRouteError() as Error;

    return (
        <div className="my-24 flex w-full flex-col items-center justify-center">
            {error?.status !== undefined ? (
                <p className="from-primary-purples-acai to-primary-main m-0 bg-gradient-to-r bg-clip-text p-0 text-9xl text-transparent">
                    {error.status}
                </p>
            ) : null}
            {error?.statusText !== undefined ? (
                <p className="from-primary-purples-acai to-primary-main mt-1 bg-gradient-to-r bg-clip-text text-xl font-normal text-transparent">
                    {error.statusText}
                </p>
            ) : null}
        </div>
    );
};

export default ErrorPage;
