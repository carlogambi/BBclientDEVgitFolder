let isAnimationEnded;

export default {
    setAnimationEnd : (trueOrFlase) => { isAnimationEnded = trueOrFlase; },
    isAnimationEnded: () => {return isAnimationEnded}
}