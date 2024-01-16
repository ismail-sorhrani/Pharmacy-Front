import {Icon} from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/medical-bag";
import SearchBox from "./SearchBox";

const LoadVilles = ({ville , chooseZone }) => {
    return (
        <div className="droite">
            <SearchBox ville={ville} chooseZone={chooseZone} />
        </div>
    )
}

export default LoadVilles