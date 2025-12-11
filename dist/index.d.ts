import * as react_jsx_runtime from 'react/jsx-runtime';

type RatingProps = {
    starAmount?: number;
    defaultValue?: number;
    isReadonly?: boolean;
    onChange?: (value: number) => void;
};
declare const Rating: ({ starAmount, defaultValue, isReadonly, onChange, }: RatingProps) => react_jsx_runtime.JSX.Element;

export { Rating };
