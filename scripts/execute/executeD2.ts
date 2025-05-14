import { execute } from './executeProcess';

interface IProps {
  src: string;
  target: string;
  workingDir: string;
  sketch?: boolean;
  watch?: boolean;
  darkMode?: boolean;
}
export const executeD2 = async (props: IProps) => {
  const result = await execute({ args: ['d2', '--help'] });
  if (result.isSuccess == false) {
    console.warn('D2 cli was not found. Attempting using Docker');
    return {
      isSuccess: false,
      errorMessage: '',
    };
  }

  const args: Array<string> = [];
  if (props.darkMode) {
    args.push('--theme 200 --dark-theme 200');
  } else {
    args.push('--theme 0 --dark-theme 200');
  }
  if (props.target.includes('.d2.png') == false) {
    args.push('--animate-interval=1200');
  }
  if (props.sketch == true) {
    args.push('--sketch');
  }
  if (props.watch == true) {
    args.push('--watch');
  }
  args.push(props.src);
  args.push(props.target);
  const execResult = await execute({
    args: ['d2', ...args],
    workingDir: props.workingDir,
  });
  return {
    isSuccess: execResult.isSuccess,
    errorMessage: execResult.errorMessage,
  };
};
