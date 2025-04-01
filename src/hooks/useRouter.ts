export const useRouter = () => {
  const push = (url: string) => {
    history.pushState({}, "", url);
  };
  const back = () => {
    history.back();
  };
  const forward = () => {
    history.forward();
  };
  const go = (page: number) => {
    history.go(page);
  };

  return {
    push,
    back,
    forward,
    go,
  };
};
