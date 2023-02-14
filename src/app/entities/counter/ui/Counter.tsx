import { Button } from 'shared/ui/Button/Button';

export const Counter = () => {
    const increment = () => {};
    const decrement = () => {};
    return (
        <div>
            <h1>value</h1>
            <Button onClick={increment}>increment</Button>
            <Button onClick={decrement}>decrement</Button>
        </div>
    );
};
