import { ref } from 'vue';
export const useQuartz = (interval: number = 1000)
    : [() => number,
        () => void,
        () => void,
        () => void,
        () => boolean,
    ] => {
    const prevTime = ref(0);
    const tick = ref(0);
    const isRunning = ref(false);

    const time = (): number => {
        return Math.floor(tick.value / interval);
    }

    const start = () => {
        isRunning.value = true;
        prevTime.value = (new Date()).getTime();
        loop();
    };

    const loop = () => {
        if (isRunning.value) {
            const now = (new Date()).getTime();
            const delta = now - prevTime.value;
            tick.value = delta;
            requestAnimationFrame(loop)
        }
    }

    const pause = () => {
        isRunning.value = false;
    };

    const reset = () => {
        isRunning.value = false;
    }

    const running = (): boolean => {
        return isRunning.value;
    }

    return [
        time,
        start,
        pause,
        reset,
        running
    ];
};