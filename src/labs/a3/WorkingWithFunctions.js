import ES5Functions from './es-5-functions';
import ArrowFunctions from './arrow-functions';
import ImpliedReturn from './implied-return';
import FunctionParenthesisAndParameters from './function-parenthesis-and-parameters';

function WorkingWithFunctions() {
  return (
    <div>
      {/* Other components */}
      <ES5Functions />
      <ArrowFunctions/>
      <ImpliedReturn/>
      <FunctionParenthesisAndParameters/>
    </div>
  );
}

export default WorkingWithFunctions;