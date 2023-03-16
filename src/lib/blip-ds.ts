import type { JSX as LocalJSX } from 'blip-ds/loader';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type StencilToReactElements<T = LocalJSX.IntrinsicElements> = {
    [P in keyof T]?: T[P] &
        Omit<DetailedHTMLProps<HTMLAttributes<T[P]>, T[P]>, 'className'> & {
            class?: string;
        };
};

type StencilToReactRef<T = HTMLElementTagNameMap> = {
    [P in keyof T]: {
        ref?: DetailedHTMLProps<HTMLAttributes<T[P]>, T[P]>['ref'];
    };
};
type StencilToReact<
    T = LocalJSX.IntrinsicElements,
    U = HTMLElementTagNameMap
> = StencilToReactElements<T> & StencilToReactRef<U>;

declare global {
    /* eslint-disable-next-line @typescript-eslint/no-namespace --
     * This is the default configuration found in the blip-ds docs.
     */
    export namespace JSX {
        /* eslint-disable-next-line @typescript-eslint/no-empty-interface --
         * This is also the default configuration found in the blip-ds docs.
         */
        interface IntrinsicElements extends StencilToReact {}
    }
}

const loadBlipDs = async () => {
    const { applyPolyfills, defineCustomElements } = await import(
        'blip-ds/loader'
    );

    await applyPolyfills();
    await defineCustomElements(window);
};

void loadBlipDs();
