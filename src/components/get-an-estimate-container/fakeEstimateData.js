import CalculatorIcon from "../icon-containers/Calculator";
import IdeaIcon from "../icon-containers/IdeaIcon";
import MobilePhoneIcon from "../icon-containers/MobilPhoneIcon";
import MonitorIcon from "../icon-containers/MonitorIcon";
import NotesIcon from "../icon-containers/NotesIcon";
import OptionsIcon from "../icon-containers/OptionsIcon";

export const getAnEstimateData = {
    projectNeed: [
        {
            id: "a1",
            icon: <IdeaIcon />,
            desc: "Business Idea Verification",
        },
        {
            id: "a2",
            icon: <OptionsIcon />,
            desc: "Some Improvements",
        },
        {
            id: "a3",
            icon: <CalculatorIcon />,
            desc: "To be created from scratch",
        }
    ],
    projectDevice: [
        {
            id: "b1",
            icon: <MonitorIcon />,
            desc: "WEB",
        },
        {
            id: "b2",
            icon: <MobilePhoneIcon />,
            desc: "MOBILE",
        },
        {
            id: "b3",
            icon: <NotesIcon />,
            desc: "Other",
        }
    ],
    budget: [
        {
            id: "c1",
            sum: "Under 1000 $"
        },
        {
            id: "c2",
            sum: "1000 $ - 3000 $"
        },
        {
            id: "c3",
            sum: "3000 $ +"
        }
    ]
}