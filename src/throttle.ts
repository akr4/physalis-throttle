export type Throttle = {
    push: (f: () => void) => void;
    flush: () => void;
};

export const makeThrottle = (interval: number): Throttle => {
    let process: (() => void) | undefined;

    const push = (f: () => void) => {
        if (!process) {
            setTimeout(() => {
                if (process) {
                    process();
                    process = undefined;
                }
            }, interval);
        }
        process = f;
    };

    const flush = () => {
        if (process) {
            process();
            process = undefined;
        }
    };

    return {
        push,
        flush,
    };
};
