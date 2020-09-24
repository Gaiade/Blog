import Container from "./container";
import cn from "classnames";
import { EXAMPLE_PATH } from "../lib/constants";

export default function Alert() {
  return (
    <div className={cn("border-b")}>
      <Container>
        <div className="py-2 text-center text-sm">
          <>
            Vous souhaitez contribuer ? Nous acceptons les soumissions sur&nbsp;
            <a
              href={`https://github.com/Gaiade/Blog`}
              className="underline hover:text-success duration-200 transition-colors"
            >
              GitHub
            </a>
            .
          </>
        </div>
      </Container>
    </div>
  );
}
