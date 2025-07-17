import Summary from "./Summary";
import { SUMMARIES } from "../../../mocks";

function Default() {
    return <>
        <Summary summaries={SUMMARIES}/>
    </>
}

export default Default;